'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, AlertCircle, CheckCircle, Star, Clock } from 'lucide-react';

const AgendAkiPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Capa
    {
      type: 'cover',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-green-800 text-white p-12">
          <h1 className="text-7xl font-bold mb-6">AgendAki</h1>
          <p className="text-3xl mb-8">A Solução Completa para Gestão de Agendamentos</p>
          <p className="text-xl opacity-90">Apresentação para Donos de Salões e Barbearias</p>
        </div>
      )
    },
    
    // Slide 2: O Problema
    {
      type: 'content',
      title: 'O Problema Atual',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <AlertCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">71% dos clientes</h3>
              <p className="text-gray-600 text-lg">Já tiveram problemas ao fazer agendamentos</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">58% dos clientes</h3>
              <p className="text-gray-600 text-lg">Não costumam agendar, vão direto ao salão</p>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-xl text-gray-700">
              <strong>Resultado:</strong> Filas de espera, horários perdidos e clientes insatisfeitos
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 3: Problemas Específicos
    {
      type: 'content',
      title: 'Principais Problemas Relatados',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-green-600 p-5">
            <p className="text-lg text-gray-700">"Ligar, agendar e mesmo assim ficar na fila de espera"</p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-5">
            <p className="text-lg text-gray-700">"Não atendem o telefone; Chegar e ter que esperar"</p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-5">
            <p className="text-lg text-gray-700">"Eu fui pra lá e não tinha gente lá pra me atender"</p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-5">
            <p className="text-lg text-gray-700">"Tive dificuldades em sair de casa até ao salão para fazer a marcação"</p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-5">
            <p className="text-lg text-gray-700">"Marco um horário e mesmo assim tenho de esperar horas quando chego"</p>
          </div>
        </div>
      )
    },
    
    // Slide 4: Mudança de Salão
    {
      type: 'content',
      title: 'O Custo de Não Digitalizar',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-600 p-8 rounded-lg text-center">
            <h3 className="text-5xl font-bold mb-4 text-red-700">44%</h3>
            <p className="text-2xl text-gray-800">dos clientes já mudaram de salão por problemas com marcações</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2 text-green-600">52%</h4>
              <p className="text-gray-700">Já desistiram de agendar por processo complicado</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2 text-green-600">42</h4>
              <p className="text-gray-700">Salões/barbearias diferentes mencionados (mercado fragmentado)</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: O Que os Clientes Querem
    {
      type: 'content',
      title: 'O Que os Clientes Realmente Querem',
      content: (
        <div className="space-y-4">
          <div className="flex items-center bg-white border-2 border-green-600 p-5 rounded-lg">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">1</div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800">Não ter de esperar filas</p>
              <p className="text-green-600 font-bold">92% dos respondentes</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white border-2 border-green-600 p-5 rounded-lg">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">2</div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800">Facilidade de encontrar horários disponíveis</p>
              <p className="text-green-600 font-bold">79% dos respondentes</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white border-2 border-green-600 p-5 rounded-lg">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">3</div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800">Preço claro no momento do agendamento</p>
              <p className="text-green-600 font-bold">50% dos respondentes</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white border-2 border-green-600 p-5 rounded-lg">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">4</div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800">Possibilidade de escolher quem irá me atender</p>
              <p className="text-green-600 font-bold">48% dos respondentes</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Aceitação do App
    {
      type: 'content',
      title: 'Aceitação do Mercado',
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-4 border-green-600 p-12 rounded-lg text-center">
            <h3 className="text-7xl font-bold mb-6 text-green-700">94%</h3>
            <p className="text-3xl text-gray-800 font-semibold">dos clientes usariam o AgendAki</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">48</p>
              <p className="text-gray-700">Respostas coletadas</p>
            </div>
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">45</p>
              <p className="text-gray-700">Usariam o app</p>
            </div>
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <p className="text-4xl font-bold text-red-600 mb-2">3</p>
              <p className="text-gray-700">Sem interesse</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Perfil do Cliente
    {
      type: 'content',
      title: 'Perfil do Público-Alvo',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-green-600">Idade</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">18-24 anos</span>
                  <span className="text-2xl font-bold text-green-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">25-34 anos</span>
                  <span className="text-xl font-bold text-gray-600">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Menos de 18</span>
                  <span className="text-xl font-bold text-gray-600">4%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-green-600">Tipo de Estabelecimento</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Barbearia</span>
                  <span className="text-2xl font-bold text-green-600">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Salão de beleza</span>
                  <span className="text-2xl font-bold text-green-600">38%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Spa</span>
                  <span className="text-xl font-bold text-gray-600">10%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border-2 border-green-600 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-green-600">Frequência</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">52%</p>
                <p className="text-gray-700">1x/mês</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">35%</p>
                <p className="text-gray-700">2x/mês</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">6%</p>
                <p className="text-gray-700">3x/mês</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">6%</p>
                <p className="text-gray-700">4+/mês</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Métodos Atuais
    {
      type: 'content',
      title: 'Como os Clientes Agendam Hoje',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-600 p-6 rounded-lg text-center">
              <h4 className="text-5xl font-bold mb-3 text-red-700">58%</h4>
              <p className="text-xl text-gray-800">Não agendam, vão direto</p>
              <p className="text-sm text-gray-600 mt-2">(Geram filas e espera)</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <h4 className="text-5xl font-bold mb-3 text-green-600">31%</h4>
              <p className="text-xl text-gray-800">WhatsApp / Redes Sociais</p>
              <p className="text-sm text-gray-600 mt-2">(Respostas demoradas)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2 text-green-600">21%</h4>
              <p className="text-gray-700">Telefone</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2 text-green-600">10%</h4>
              <p className="text-gray-700">Presencialmente</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold mb-2 text-green-600">2%</h4>
              <p className="text-gray-700">Site próprio</p>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-lg text-gray-700">
              <strong>Oportunidade:</strong> 98% dos salões ainda não têm sistema online de agendamento
            </p>
          </div>
        </div>
      )
    },
    
    // Slide 9: Benefícios para o Salão
    {
      type: 'content',
      title: 'Benefícios para o Seu Salão',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Reduza No-Shows</h4>
            <p className="text-gray-600">Sistema de lembretes automáticos e confirmações reduz faltas</p>
          </div>
          
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Maximize Ocupação</h4>
            <p className="text-gray-600">Elimine horários vazios com agendamento 24/7</p>
          </div>
          
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Reduza Filas</h4>
            <p className="text-gray-600">92% dos clientes querem evitar filas - atenda essa demanda</p>
          </div>
          
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Aumente Fidelização</h4>
            <p className="text-gray-600">44% trocam de salão por problemas - não perca clientes</p>
          </div>
          
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Gestão Eficiente</h4>
            <p className="text-gray-600">Controle completo de horários, profissionais e serviços</p>
          </div>
          
          <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold mb-3 text-gray-800">Menos Telefone</h4>
            <p className="text-gray-600">Libere sua equipe para focar no atendimento</p>
          </div>
        </div>
      )
    },
    
    // Slide 10: Call to Action
    {
      type: 'content',
      title: 'Junte-se à Revolução Digital',
      content: (
        <div className="h-full flex flex-col justify-center space-y-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-lg text-center">
            <h3 className="text-4xl font-bold mb-6">94% dos Seus Potenciais Clientes</h3>
            <p className="text-2xl mb-8">Estão prontos para usar o AgendAki</p>
            <p className="text-xl opacity-90">Não fique para trás!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <Star className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">Destaque-se da Concorrência</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">Aumente Seu Faturamento</p>
            </div>
            
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-700 font-semibold">Fidelize Seus Clientes</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl text-gray-700 font-semibold">Entre em contato e modernize seu salão hoje!</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative bg-white overflow-hidden">
        {slides[currentSlide].type === 'cover' ? (
          slides[currentSlide].content
        ) : (
          <div className="h-full p-6 md:p-12 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-800 border-b-4 border-green-600 pb-4">
              {slides[currentSlide].title}
            </h2>
            <div className="flex-1 overflow-auto">
              {slides[currentSlide].content}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm md:text-base"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>
        
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-sm md:text-lg">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="hidden md:flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-600'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm md:text-base"
          aria-label="Próximo slide"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default AgendAkiPresentation;