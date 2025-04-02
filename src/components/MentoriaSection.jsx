import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

// Importações corretas das imagens
import live1 from './live1.png';
import live2 from './live2.png';

const MentoriaMinimalSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeImage, setActiveImage] = useState(0);
  
  // Array com as duas imagens das mentorias usando os imports corretos
  const mentoriaImages = [
    live1,
    live2
  ];
  
  // Autoplay para o slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => prev === 0 ? 1 : 0);
    }, 5000); // Muda a cada 5 segundos
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-16 overflow-hidden"
    >
      {/* Background elements - simplificados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Título minimalista */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mentorias <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">ao Vivo</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto"></div>
        </motion.div>
        
        {/* Layout simplificado - foco na imagem e nos tópicos essenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Coluna principal: Imagem das mentorias em autoplay */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Container do slideshow simplificado */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              {/* Borda simples sem gradiente */}
              <div className="absolute -inset-0.5 bg-[#AF8D4A]/20 rounded-xl"></div>
              
              {/* Container da imagem com autoplay */}
              <div className="relative h-full rounded-xl overflow-hidden border border-[#AF8D4A]/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Imagem real da mentoria */}
                    <img 
                      src={mentoriaImages[activeImage]} 
                      alt={`Mentoria ${activeImage === 0 ? 'Principal' : 'Avançada'} com Cristofer Leone`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Imagem sem overlay ou badges */}
                  </motion.div>
                </AnimatePresence>
                
                {/* Indicadores de slides minimalistas */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {mentoriaImages.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        activeImage === index ? 'bg-[#AF8D4A]' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Estatística única e impactante */}
            <motion.div 
              className="mt-4 bg-[#AF8D4A]/10 border border-[#AF8D4A]/20 rounded-lg p-3 flex justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <Users className="text-[#AF8D4A]" size={20} />
                <span className="text-white font-bold">Mais de 500 vidas transformadas</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Coluna secundária: Somente informação essencial e CTA */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-5 h-full flex flex-col">
              {/* Título conciso */}
              <h3 className="text-xl font-bold text-white mb-4">
                Transformação em Grupo
              </h3>
              
              {/* Descrição ultra concisa */}
              <p className="text-white/80 text-sm mb-6">
                Sessões exclusivas com Cristofer Leone para desbloquear seu potencial 
                e transformar sua vida através do método Travessia.
              </p>
              
              {/* Apenas os 4 tópicos principais */}
              <div className="space-y-3 mb-6 flex-grow">
                {[
                  "🧠 Reprogramação Mental",
                  "🎯 Foco e Produtividade",
                  "⚡ Desbloqueio de Identidade",
                  "🔄 Gestão Emocional"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#AF8D4A]/5 rounded-lg p-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <span className="text-white text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA - Call to Action */}
              <motion.button
                className="w-full bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg group"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span>Participar Agora</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaMinimalSection;