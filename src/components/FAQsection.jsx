import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      pergunta: "O que é o Método Travessia?",
      resposta: "O Método Travessia é um programa de desenvolvimento pessoal baseado em 4 pilares fundamentais que ajudam você a transformar sua vida pessoal e profissional. O método foi desenvolvido por Cristofer Leone e já ajudou mais de 500 pessoas a alcançarem seus objetivos."
    },
    {
      pergunta: "Como funciona o programa personalizado?",
      resposta: "Após preencher o formulário de solicitação, nossa equipe irá analisar suas necessidades específicas e objetivos. Com base nisso, desenvolvemos um plano totalmente personalizado que se adapta à sua realidade atual e às metas que deseja alcançar."
    },
    {
      pergunta: "Quanto tempo demora para ver resultados?",
      resposta: "Os resultados variam de acordo com o comprometimento individual e os objetivos específicos. A maioria dos participantes começa a notar mudanças significativas entre 30 e 60 dias após o início do programa, com a implementação consistente das estratégias ensinadas."
    },
    {
      pergunta: "As mentorias são individuais ou em grupo?",
      resposta: "O programa inclui tanto mentorias em grupo ao vivo semanais quanto sessões de acompanhamento individual. Esta combinação proporciona o suporte da comunidade e a atenção personalizada necessária para seu desenvolvimento."
    },
    {
      pergunta: "Quanto custa o Método Travessia?",
      resposta: "O investimento varia de acordo com o pacote escolhido e a personalização necessária para seus objetivos. Para receber um orçamento detalhado, preencha o formulário de solicitação e nossa equipe entrará em contato em até 24 horas."
    }
  ];

  return (
    <section
      id="perguntas-frequentes"
      ref={sectionRef}
      className="relative w-full bg-black py-12 md:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tl-full"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Frequentes</span>
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Método Travessia
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
            >
              <div 
                className={`bg-black/40 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'shadow-lg shadow-[#AF8D4A]/10' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-3 sm:p-4 md:p-5 flex justify-between items-center"
                >
                  <h3 className="text-white font-medium text-base sm:text-lg pr-4 sm:pr-8">{item.pergunta}</h3>
                  <div className={`bg-[#AF8D4A]/20 p-1.5 sm:p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    {openIndex === idx ? (
                      <ChevronUp className="text-[#AF8D4A] w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <ChevronDown className="text-[#AF8D4A] w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-3 sm:p-4 md:p-5 pt-0 border-t border-[#AF8D4A]/10">
                    <p className="text-white/80 text-sm sm:text-base">{item.resposta}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA após o FAQ */}
        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a
            href="#solicitar-orcamento"
            className="inline-flex items-center justify-center gap-2 bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
          >
            <span>Solicitar Orçamento</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;