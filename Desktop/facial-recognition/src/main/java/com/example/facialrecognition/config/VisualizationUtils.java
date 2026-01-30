package com.example.facialrecognition.config;

import com.example.facialrecognition.model.MatchResult;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.Point;
import org.opencv.core.Rect;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;

public class VisualizationUtils {
    private static final Scalar MATCHED_BOX_COLOR = new Scalar(0, 255, 0);
    private static final Scalar MISMATCHED_BOX_COLOR = new Scalar(0, 0, 255);

    private static final Size DEFAULT_TARGET_SIZE = new Size(512, 512);
    private static final int BOX_THICKNESS = 2;
    private static final double SCORE_FONT_SCALE = 0.30;
    private static final int SCORE_TEXT_Y_OFFSET = 12;

    private static final int FACE_X = 0;
    private static final int FACE_Y = 1;
    private static final int FACE_W = 2;
    private static final int FACE_H = 3;
    private static final int MIN_FACE_VALUES = 4;


    private static double[] extractFaceData(Mat faceMatrix) {
        if (faceMatrix == null || faceMatrix.empty() || 0 >= faceMatrix.rows()) {
            return new double[0];
        }

        int cols = faceMatrix.cols();
        double[] result = new double[cols];

        int depth = faceMatrix.depth();
        if (depth == CvType.CV_32F) {
            float[] floatData = new float[cols];
            faceMatrix.get(0, 0, floatData);
            for (int i = 0; i < cols; i++) {
                result[i] = floatData[i];
            }
            return result;
        }

        if (depth == CvType.CV_64F) {
            faceMatrix.get(0, 0, result);
            return result;
        }

        Mat row = null;
        Mat convertedRow = null;
        try {
            row = faceMatrix.row(0);
            convertedRow = new Mat();
            row.convertTo(convertedRow, CvType.CV_64F);
            convertedRow.get(0, 0, result);
            return result;
        } finally {
            if (convertedRow != null) convertedRow.release();
            if (row != null) row.release();
        }
    }

    public static Mat visualize(Mat image, Mat faces, MatchResult match, Size targetSize) {
        Mat outputImage = Mat.zeros(targetSize, CvType.CV_8UC3);

        if (image == null || image.empty()) {
            return outputImage;
        }

        Placement placement = resizeAndCenterOnCanvas(image, outputImage, targetSize);
        Rect faceRect = tryReadFaceRect(faces, placement.ratio(), placement.left(), placement.top());

        if (faceRect != null) {
            drawMatchAnnotation(outputImage, faceRect, match);
        }

        return outputImage;
    }

    public static Mat visualize(Mat image, Mat faces, MatchResult match) {
        return visualize(image, faces, match, DEFAULT_TARGET_SIZE);
    }

    private static Placement resizeAndCenterOnCanvas(Mat image, Mat canvas, Size targetSize) {
        double ratio = Math.min(targetSize.height / image.rows(), targetSize.width / image.cols());
        int newHeight = (int) (image.rows() * ratio);
        int newWidth = (int) (image.cols() * ratio);

        Mat resized = new Mat();
        try {
            Imgproc.resize(image, resized, new Size(newWidth, newHeight), 0, 0, Imgproc.INTER_LINEAR);

            int top = Math.max(0, (int) targetSize.height - newHeight) / 2;
            int left = Math.max(0, (int) targetSize.width - newWidth) / 2;

            Rect roi = new Rect(left, top, newWidth, newHeight);
            Mat canvasRoi = new Mat(canvas, roi);
            try {
                resized.copyTo(canvasRoi);
            } finally {
                canvasRoi.release();
            }

            return new Placement(ratio, left, top);
        } finally {
            resized.release();
        }
    }

    private static Rect tryReadFaceRect(Mat faces, double ratio, int left, int top) {
        if (faces == null || faces.empty()) {
            return null;
        }

        double[] faceData = extractFaceData(faces);
        if (faceData.length < MIN_FACE_VALUES) {
            return null;
        }

        int x = (int) (faceData[FACE_X] * ratio) + left;
        int y = (int) (faceData[FACE_Y] * ratio) + top;
        int w = (int) (faceData[FACE_W] * ratio);
        int h = (int) (faceData[FACE_H] * ratio);

        if (w <= 0 || h <= 0) {
            return null;
        }

        return new Rect(x, y, w, h);
    }

    private static void drawMatchAnnotation(Mat outputImage, Rect faceRect, MatchResult match) {
        Scalar boxColor = (match != null && match.isMatch()) ? MATCHED_BOX_COLOR : MISMATCHED_BOX_COLOR;

        Imgproc.rectangle(outputImage, faceRect, boxColor, BOX_THICKNESS);

        double score = (match != null) ? match.score() : 0.0;
        Imgproc.putText(
                outputImage,
                String.format("%.4f", score),
                new Point(faceRect.x, faceRect.y + SCORE_TEXT_Y_OFFSET),
                Imgproc.FONT_HERSHEY_DUPLEX,
                SCORE_FONT_SCALE,
                boxColor
        );
    }

    private record Placement(double ratio, int left, int top) {
    }
}