import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef(null);
  
  const testimonials = [
    {
      name: "André Oliveira",
      role: "Aprovado em 1º lugar",
      image: "/api/placeholder/120/120",
      quote: "Antes do Método Travessia, eu tinha muita dificuldade em manter o foco nos estudos. Após aplicar as técnicas de reprogramação mental, conquistei minha aprovação em 1º lugar e transformei completamente minha carreira.",
      stars: 5,
      highlight: "Aprovação em 1º lugar em concurso federal"
    },
    {
      name: "Mariana Costa",
      role: "Perdeu 32kg em 10 meses",
      image: "/api/placeholder/120/120",
      quote: "Eu tentei inúmeras dietas antes, mas sempre voltava ao mesmo ponto. Com o Método Travessia, consegui não apenas emagrecer, mas transformar minha relação com a alimentação e atividade física de forma permanente.",
      stars: 5,
      highlight: "Transformação física e mental completa"
    },
    {
      name: "Lucas Mendes",
      role: "Empreendedor",
      image: "/api/placeholder/120/120",
      quote: "Meu negócio estava estagnado há anos. As técnicas de produtividade exponencial me ajudaram a otimizar processos e escalar minha empresa em tempo recorde. O retorno sobre o investimento foi surpreendente.",
      stars: 5,
      highlight: "Faturamento triplicado em 6 meses"
    },
    {
      name: "Carolina Lima",
      role: "Professora",
      image: "/api/placeholder/120/120",
      quote: "O módulo de foco inabalável foi decisivo para eu conseguir equilibrar minha vida profissional com o mestrado. Consegui concluir minha dissertação em metade do tempo previsto enquanto mantinha minha qualidade de vida.",
      stars: 5,
      highlight: "Conciliou trabalho e mestrado com excelência"
    }
  ];
  
  // Autoplay logic
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, testimonials.length]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Slide navigation
  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full"></div>
        
        {/* Additional decoration */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#AF8D4A]/15 to-transparent blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-l from-[#AF8D4A]/20 to-transparent blur-md"></div>
      </div>

      {/* Main content container */}
      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-white text-4xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Histórias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Travessia</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          
          <motion.p
            className="text-white/70 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Conheça quem já embarcou na jornada e transformou completamente sua vida pessoal e profissional
          </motion.p>
        </div>
        
        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large quote icon backdrop */}
          <div className="absolute text-[#AF8D4A]/10 z-0 top-0 left-1/2 transform -translate-x-1/2">
            <Quote size={200} />
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Avatar & Details - Desktop: Left side, Mobile: Top */}
                    <div className="flex flex-col items-center md:items-start">
                      <div className="relative mb-3">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] rounded-full blur-sm"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="relative w-20 h-20 rounded-full object-cover border-2 border-[#AF8D4A]"
                        />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                      <p className="text-[#AF8D4A] text-sm mb-2">{testimonial.role}</p>
                      
                      {/* Star rating */}
                      <div className="flex text-[#AF8D4A] mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={16} fill="#AF8D4A" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial content - Desktop: Right side, Mobile: Bottom */}
                    <div className="flex-1">
                      <div className="bg-[#AF8D4A]/5 border border-[#AF8D4A]/20 rounded-lg p-4 md:p-6 mb-4 relative">
                        {/* Small quote icon */}
                        <div className="absolute -top-3 -left-3 bg-black p-1 rounded-full">
                          <Quote size={20} className="text-[#AF8D4A]" />
                        </div>
                        
                        <p className="text-white/80 italic mb-0">{testimonial.quote}</p>
                      </div>
                      
                      {/* Highlight box */}
                      <div className="bg-[#AF8D4A]/10 border-l-2 border-[#AF8D4A] p-3 rounded-r-md">
                        <div className="text-white font-medium">Resultado destacado:</div>
                        <div className="text-white/90">{testimonial.highlight}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows & indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
              {/* Left arrow */}
              <button 
                onClick={prevSlide}
                className="bg-black/50 hover:bg-[#AF8D4A] text-white rounded-full p-2 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'bg-[#AF8D4A] w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Right arrow */}
              <button 
                onClick={nextSlide}
                className="bg-black/50 hover:bg-[#AF8D4A] text-white rounded-full p-2 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: "500+", label: "Vidas Transformadas" },
            { value: "92%", label: "Taxa de Conclusão" },
            { value: "45kg", label: "Recorde de Perda de Peso" },
            { value: "12", label: "Aprovações em Concursos" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-[#AF8D4A]/5 border border-[#AF8D4A]/20 rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <button className="bg-[#AF8D4A] text-white font-medium py-3 px-8 rounded-md flex items-center mx-auto hover:bg-[#8C7239] transition-colors duration-300">
            <span>Comece Sua História</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;