package com.example.facialrecognition.service;

import com.example.facialrecognition.config.VisualizationUtils;
import com.example.facialrecognition.model.MatchResult;
import org.bytedeco.javacpp.Loader;
import org.bytedeco.opencv.opencv_java;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.dnn.Dnn;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.objdetect.FaceDetectorYN;
import org.opencv.objdetect.FaceRecognizerSF;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.UUID;


@Service
public class RecognitionService {

    private final static String sFaceModel = "C:/Users/LEGION GAMING/Desktop/facial-recognition/src/main/resources/models/face_recognition_sface_2021dec.onnx";
    private final static String yunetModel = "C:/Users/LEGION GAMING/Desktop/facial-recognition/src/main/resources/models/face_detection_yunet_2023mar.onnx";

    static {
        Loader.load(opencv_java.class);
    }

    private final FaceDetectorYN yunetDetector =
            FaceDetectorYN.create(
                    yunetModel,
                    "",
                    new Size(350, 350),
                    0.5f,
                    0.3f,
                    Dnn.DNN_BACKEND_OPENCV,
                    Dnn.DNN_TARGET_CPU
            );

    private final FaceRecognizerSF sFaceRecognizer =
            FaceRecognizerSF.create(
                    sFaceModel,
                    "",
                    Dnn.DNN_BACKEND_OPENCV,
                    Dnn.DNN_TARGET_CPU
            );

    private Mat infer(Mat image){
        yunetDetector.setInputSize(image.size());
        Mat result = new Mat();
        yunetDetector.detect(image, result);
        return result;
    }

    private Mat extractFeatures(Mat originImage, Mat faceImage){
        Mat targetAligned = new Mat();
        sFaceRecognizer.alignCrop(originImage, faceImage, targetAligned);
        Mat targetFeatures = new Mat();
        sFaceRecognizer.feature(targetAligned, targetFeatures);
        return targetFeatures.clone();
    }

    public MatchResult matchFeatures(Mat target, Mat query){
        Mat targetFaces = infer(target);
        Mat queryFaces = infer(query);

        if (targetFaces.empty() || queryFaces.empty()) {
            return new MatchResult(0.0, false);
        }

        Mat targetFeatures = this.extractFeatures(target, targetFaces.row(0));
        Mat queryFeatures = this.extractFeatures(query, targetFaces.row(0));

        double score = sFaceRecognizer.match(targetFeatures, queryFeatures, FaceRecognizerSF.FR_COSINE);
        boolean isMatch = score > 0.363f;

        MatchResult matchResult = new MatchResult(score, isMatch);
        saveVisualizedImage(query, target, targetFaces.row(0), queryFaces, matchResult);
        return matchResult;
    }

    private void saveVisualizedImage(Mat queryImage, Mat targetImage, Mat targetFace, Mat queryFaces, MatchResult matches) {
        Mat visTarget = VisualizationUtils.visualize(
                targetImage,
                targetFace,
                new MatchResult(1.0, true)
        );
        Mat visQuery = VisualizationUtils.visualize(queryImage, queryFaces, matches);

        Mat outputImage = new Mat();
        Core.hconcat(Arrays.asList(visTarget, visQuery), outputImage);

        String filePath = "./images/validated-" + UUID.randomUUID().getLeastSignificantBits() + ".jpg";

        Imgcodecs.imwrite(filePath, outputImage);
    }

}

