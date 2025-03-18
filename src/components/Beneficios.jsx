import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Award, Dumbbell, Zap } from 'lucide-react';

const BeneficiosSection = () => {
  const benefitsData = [
    {
      icon: <Brain size={32} />,
      title: "Reprogramação Mental",
      description: "Elimine crenças limitantes e desenvolva uma mentalidade de sucesso absoluto que impulsiona resultados extraordinários."
    },
    {
      icon: <Target size={32} />,
      title: "Foco Inabalável",
      description: "Desenvolva técnicas avançadas para manter o foco em seus objetivos, mesmo em ambientes de alta pressão e distração."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Produtividade Exponencial",
      description: "Aprenda sistemas comprovados para multiplicar sua produtividade e conquistar mais resultados em menos tempo."
    },
    {
      icon: <Award size={32} />,
      title: "Resultados Garantidos",
      description: "Aplicando a mesma metodologia que levou Cristofer à aprovação em múltiplos concursos públicos de alta competitividade."
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Transformação Completa",
      description: "Transformação integral do corpo e mente, seguindo o mesmo processo que permitiu a Cristofer superar a obesidade."
    },
    {
      icon: <Zap size={32} />,
      title: "Alta Performance",
      description: "Desenvolva o mindset e os hábitos dos indivíduos de maior desempenho do mundo para resultados consistentes."
    }
  ];

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden">
      {/* Background - consistente em todas as telas */}
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
            Benefícios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Transformadores</span>
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Descubra como nossa metodologia exclusiva vai revolucionar sua vida através de um processo comprovado de desenvolvimento pessoal.
          </p>
        </div>

        {/* Timeline-style interactive benefits showcase */}
        <div className="relative mx-auto">
          {/* Vertical line connecting elements - Posicionamento melhorado */}
          <div className="hidden md:block absolute" style={{ 
            left: "50%", 
            top: "0",
            bottom: "0",
            width: "1px", 
            backgroundColor: "rgba(175, 141, 74, 0.3)", 
            transform: "translateX(-50%)",
            zIndex: 0
          }}></div>
          
          {/* Benefits interactive display - ajustado para mobile */}
          <div className="flex flex-col space-y-16 md:space-y-24 mb-12">
            {benefitsData.map((benefit, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-10`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Bolinha na timeline - igual em mobile e desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 bg-[#AF8D4A] rounded-full z-10"></div>
                  
                  {/* Icon com z-index maior que a linha */}
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-black border border-[#AF8D4A]/30 shadow-md z-10">
                    <div className="text-[#AF8D4A]">{benefit.icon}</div>
                  </div>
                  
                  {/* Content com background para cobrir a linha */}
                  <div className={`flex-1 text-center md:text-left ${!isEven && 'md:text-right'} max-w-md mx-auto md:mx-0 relative z-10`}>
                    <div className="bg-black pt-1 pb-2 px-1">
                      <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <button className="bg-[#AF8D4A] text-white font-medium py-3 px-8 rounded-md relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Iniciar Minha Transformação
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default BeneficiosSection;