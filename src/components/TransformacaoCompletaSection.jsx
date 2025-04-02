import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Briefcase, ShoppingBag, Home } from 'lucide-react';

// Imagens com os nomes corretos
import imagemAntes from './antes3.jpg'; 
import imagemDepois from './depois3.jpg'; 

const ProspridadeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black overflow-hidden py-16 md:py-20"
    >
      {/* Background otimizado */}
      <div className="absolute inset-0 z-0 bg-black opacity-95"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full z-0 opacity-60 sm:opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full z-0 opacity-60 sm:opacity-80"></div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Da Limitação à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Prosperidade</span>
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Uma transformação que vai além da aparência física
          </p>
        </motion.div>

        {/* Layout de 2 colunas (mobile: coluna única) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Coluna esquerda: Antes */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#AF8D4A]/30 to-transparent rounded-xl blur-md"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#AF8D4A]/30 shadow-xl">
                <img 
                  src={imagemAntes} 
                  alt="Antes da transformação" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent py-3 px-4">
                  <h3 className="text-xl font-bold text-white">ANTES</h3>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-5 flex-grow">
              <h3 className="text-white font-bold text-lg mb-4">Limitações Financeiras</h3>
              <ul className="space-y-3">
                {[
                  "Dificuldade em progredir na carreira",
                  "Sonhos materiais pareciam inatingíveis",
                  "Sem clareza sobre como gerar prosperidade",
                  "Mentalidade de escassez e autossabotagem"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-2 text-white/80 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                  >
                    <span className="text-[#AF8D4A] font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Coluna direita: Depois */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-xl overflow-hidden mb-4">
              <div className="absolute -inset-1 bg-gradient-to-l from-[#AF8D4A]/30 to-transparent rounded-xl blur-md"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#AF8D4A]/30 shadow-xl">
                <img 
                  src={imagemDepois} 
                  alt="Depois da transformação" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent py-3 px-4">
                  <h3 className="text-xl font-bold text-white">DEPOIS</h3>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-5 flex-grow">
              <h3 className="text-white font-bold text-lg mb-4">Vida de Prosperidade</h3>
              <ul className="space-y-3">
                {[
                  "Aprovações em múltiplos concursos importantes",
                  "Conquista de bens materiais de alto padrão",
                  "Capacidade de investir e gerar abundância",
                  "Mentalidade próspera que atrai oportunidades"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-2 text-white/80 text-sm"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                  >
                    <span className="text-[#AF8D4A] font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Elementos da transformação */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { icon: <TrendingUp className="w-5 h-5" />, titulo: "Carreira", desc: "Ascensão profissional" },
            { icon: <Briefcase className="w-5 h-5" />, titulo: "Concursos", desc: "Múltiplas aprovações" },
            { icon: <ShoppingBag className="w-5 h-5" />, titulo: "Aquisições", desc: "Bens de alto padrão" },
            { icon: <Home className="w-5 h-5" />, titulo: "Estabilidade", desc: "Segurança financeira" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#AF8D4A]/10 border border-[#AF8D4A]/20 rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
            >
              <div className="text-[#AF8D4A] flex justify-center mb-2">
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-sm">{item.titulo}</h4>
              <p className="text-white/70 text-xs mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action simples */}
        <motion.div
          className="text-center max-w-3xl mx-auto bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Quer alcançar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">prosperidade</span> em todas as áreas da sua vida?
          </h3>
          <p className="text-white/80 mb-6 text-sm md:text-base">
            O mesmo método que transformou a vida de Cristofer está disponível para você.
          </p>
          <button className="bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg mx-auto group">
            <span>Iniciar Minha Transformação</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProspridadeSection;