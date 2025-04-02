import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Target, Zap, CheckCircle, BarChart3, Award } from 'lucide-react';

const JorneySection = () => {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const jorneySteps = [
    {
      icon: <Brain size={32} className="text-[#AF8D4A]" />,
      number: "01",
      title: "Reprogramação Mental",
      subtitle: "O Passaporte Para a Transformação",
      description: "Elimine crenças limitantes e desenvolva uma mentalidade de sucesso que impulsione resultados extraordinários."
    },
    {
      icon: <Target size={32} className="text-[#AF8D4A]" />,
      number: "02",
      title: "Foco Inabalável",
      subtitle: "Deixe as Distrações no Solo",
      description: "Desenvolva técnicas avançadas para manter o foco em seus objetivos, mesmo em ambientes de alta pressão e distração."
    },
    {
      icon: <Zap size={32} className="text-[#AF8D4A]" />,
      number: "03",
      title: "Produtividade Exponencial",
      subtitle: "Acelere Sem Se Sobrecarregar",
      description: "Aprenda técnicas comprovadas para multiplicar sua produtividade e conquistar mais resultados em menos tempo."
    },
    {
      icon: <CheckCircle size={32} className="text-[#AF8D4A]" />,
      number: "04",
      title: "Resultados Garantidos",
      subtitle: "Quando Planejamento Encontra Execução",
      description: "Aplique a mesma metodologia que levou Cristofer à aprovação em múltiplos concursos públicos de alta competitividade."
    },
    {
      icon: <BarChart3 size={32} className="text-[#AF8D4A]" />,
      number: "05",
      title: "Transformação Completa",
      subtitle: "Quando Você Se Torna Irreconhecível",
      description: "Transforme-se integralmente o corpo e a mente, seguindo o mesmo processo que permitiu a Cristofer superar a obesidade."
    },
    {
      icon: <Award size={32} className="text-[#AF8D4A]" />,
      number: "06",
      title: "Alto Desempenho",
      subtitle: "O Controle Total da Sua Jornada",
      description: "Desenvolva a mentalidade e os hábitos dos indivíduos de maior desempenho do mundo para resultados consistentes."
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 bg-black overflow-hidden"
    >
      {/* Background - consistente com BeneficiosSection */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full"></div>
      </div>

      {/* Main content container */}
      <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.h2 
            className="text-white text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Travessia</span>: <span className="text-white">Do Autoconhecimento ao Alto Desempenho</span>
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Toda grande transformação começa com uma jornada. Uma verdadeira Travessia para quem está pronto para decolar e alcançar seu potencial máximo.
          </p>
        </div>
        
        {/* Journey steps - Timeline layout */}
        <div className="relative mb-16">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-[#AF8D4A]/30"></div>
          
          {/* Steps */}
          {jorneySteps.map((step, index) => (
            <motion.div
              key={index}
              className="md:pl-20 mb-16 relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step number with circle border - desktop */}
              <div className="hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full items-center justify-center border border-[#AF8D4A] bg-black">
                <span className="text-[#AF8D4A] font-medium">{step.number}</span>
              </div>
              
              <div className="md:flex items-start">
                {/* Mobile step indicator */}
                <div className="md:hidden flex items-center mb-2">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full border border-[#AF8D4A] mr-3">
                    <span className="text-[#AF8D4A]">{step.number}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">{step.title}</h3>
                </div>
                
                {/* Content wrapper for desktop */}
                <div className="hidden md:flex w-full items-start">
                  {/* Icon with title */}
                  <div className="flex items-center">
                    <div className="mr-3 w-16 h-16 rounded-full flex items-center justify-center bg-black border border-[#AF8D4A]/30 shadow-md">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] text-xl font-bold">{step.title}</h3>
                      <p className="text-[#AF8D4A] mt-1">{step.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile description */}
                <div className="md:hidden">
                  <p className="text-[#AF8D4A] mb-2">{step.subtitle}</p>
                  <p className="text-white/70">{step.description}</p>
                </div>

                {/* Desktop description - hidden on mobile */}
                <div className="hidden md:block mt-3">
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
              
              {/* Animated highlight for active step */}
              {activeStep === index && (
                <motion.div 
                  className="hidden md:block absolute left-7 w-px h-[calc(100%-56px)] bg-[#AF8D4A] bottom-0 ml-[-0.5px]"
                  initial={{ height: 0 }}
                  animate={{ height: 'calc(100% - 56px)' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <button className="bg-[#AF8D4A] text-white font-medium py-3 px-8 rounded-md relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Iniciar Minha Travessia
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#8C7239] group-hover:h-full transition-all duration-300 ease-in-out z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JorneySection;