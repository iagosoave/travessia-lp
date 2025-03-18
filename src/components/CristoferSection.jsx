import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import antes from './antes.png';
import depois from './depois.jpeg';

const CristoferSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

    // Verificar se é dispositivo móvel e definir breakpoints adicionais
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dados da jornada
  const jornada = [
    {
      titulo: "O Ponto de Partida",
      descricao: "Obesidade. Estagnação. Frustração constante. Este era Cristofer Leone, alguém com um potencial imenso preso em um corpo e uma mente que não respondiam mais ao seu comando.",
      imagem: antes,
      detalhes: [
        { label: "Peso", valor: "+120kg" },
        { label: "Tentativas", valor: "12+" },
        { label: "Estado Mental", valor: "Bloqueado" }
      ]
    },
    {
      titulo: "O Despertar",
      descricao: "Foi quando tudo parecia perdido que Cristofer teve uma revelação: não era seu corpo que o limitava, mas sua mente. O corpo era apenas um reflexo de padrões mentais disfuncionais.",
      imagem: antes,
      detalhes: [
        { label: "Insight", valor: "Reprogramação Mental" },
        { label: "Momento Crucial", valor: "Ponto de Virada" }
      ]
    },
    {
      titulo: "A Metodologia",
      descricao: "Da necessidade nasceu o método. Cristofer desenvolveu um sistema passo a passo de reprogramação mental que permitiu quebrar ciclos negativos enraizados por anos.",
      imagem: null,
      detalhes: [
        { label: "Sistema", valor: "Método Travessia" },
        { label: "Pilares", valor: "4 Fundamentais" },
        { label: "Abordagem", valor: "Integral" }
      ]
    },
    {
      titulo: "A Transformação Física",
      descricao: "A mudança mental logo se refletiu no físico. 45kg eliminados em 12 meses. Não por dietas milagrosas, mas pela reconstrução completa da relação com seu corpo e mente.",
      imagem: depois,
      detalhes: [
        { label: "Perda", valor: "-45kg" },
        { label: "Tempo", valor: "12 meses" },
        { label: "Método", valor: "Sustentável" }
      ]
    },
    {
      titulo: "O Sucesso Profissional",
      descricao: "Com a mente reprogramada, as aprovações em concursos públicos federais que antes pareciam impossíveis começaram a se tornar realidade. Não uma, mas várias vezes consecutivas.",
      imagem: null,
      detalhes: [
        { label: "Aprovações", valor: "5+" },
        { label: "Nível", valor: "Federal" },
        { label: "Competitividade", valor: "Alta" }
      ]
    },
    {
      titulo: "O Propósito",
      descricao: "Hoje, centenas de pessoas já transformaram suas vidas usando o Método Travessia. A jornada de Cristofer agora é compartilhada, multiplicando transformações por todo o Brasil.",
      imagem: depois,
      detalhes: [
        { label: "Impacto", valor: "500+ Vidas" },
        { label: "Abrangência", valor: "Nacional" },
        { label: "Missão", valor: "Transformação" }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Background otimizado */}
      <div className="fixed inset-0 z-0 bg-black opacity-95"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full z-0 opacity-60 sm:opacity-80"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full z-0 opacity-60 sm:opacity-80"></div>
      
      {/* Indicador de progresso fixo - otimizado para mobile */}
      <div className="fixed top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center gap-1.5 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-[#AF8D4A]/20">
          {jornada.map((_, index) => (
            <a 
              key={index}
              href={`#etapa-${index}`}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 border border-[#AF8D4A]/30 progress-dot ${
                index === 0 ? 'bg-[#AF8D4A]' : 'bg-[#AF8D4A]/30'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`etapa-${index}`).scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* Introdução otimizada para responsividade */}
      <div className="h-[45vh] sm:h-[50vh] pt-6 sm:pt-10 flex flex-col justify-start relative z-10" id="etapa-intro">
        <div className="container max-w-6xl mx-auto px-3 sm:px-6">
          <div className="text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Cristofer Leone</span>
            </motion.h2>
            <motion.div 
              className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto mb-3 sm:mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 sm:mb-6 px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Uma jornada extraordinária que inspirou a criação do Método Travessia
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-4 sm:mt-8"
            >
              <span className="text-white/60 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-2 bg-[#AF8D4A]/5 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full mx-auto w-fit border border-[#AF8D4A]/10">
                Role para baixo para descobrir a jornada
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce sm:w-5 sm:h-5">
                  <path d="M7 13l5 5 5-5"/>
                  <path d="M7 6l5 5 5-5"/>
                </svg>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Etapas da jornada com scroll */}
      {jornada.map((etapa, index) => (
        <StorySection 
          key={index} 
          etapa={etapa}
          index={index}
          isEven={index % 2 === 0}
          isMobile={isMobile}
          isLast={index === jornada.length - 1}
        />
      ))}
    </section>
  );
};

// Componente para cada seção da história
const StorySection = ({ etapa, index, isEven, isMobile, isLast }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // Atualizar o indicador de progresso quando a seção estiver visível
  useEffect(() => {
    if (isInView) {
      document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('bg-[#AF8D4A]');
          dot.classList.remove('bg-[#AF8D4A]/30');
        } else {
          dot.classList.remove('bg-[#AF8D4A]');
          dot.classList.add('bg-[#AF8D4A]/30');
        }
      });
    }
  }, [isInView, index]);

  const renderSpecialContent = () => {
    if (etapa.titulo === "A Metodologia") {
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          <motion.h4 
            className="text-xl md:text-2xl font-bold mb-4 text-[#AF8D4A]"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Método Travessia
          </motion.h4>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🧠", label: "Mente" },
              { icon: "⏱️", label: "Foco" },
              { icon: "🔄", label: "Hábitos" },
              { icon: "⚡", label: "Energia" }
            ].map((pilar, idx) => (
              <motion.div
                key={idx}
                className="bg-[#AF8D4A]/10 border border-[#AF8D4A]/30 p-3 rounded-lg text-center shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + (idx * 0.1) }}
              >
                <span className="text-3xl mb-2 block">{pilar.icon}</span>
                <span className="text-white font-medium text-sm md:text-base">{pilar.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (etapa.titulo === "O Sucesso Profissional") {
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 text-center"
          >
            <span className="block text-5xl md:text-6xl font-bold text-[#AF8D4A]">5+</span>
            <p className="text-lg md:text-xl mt-1 text-white">Aprovações</p>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              "Federal", "Estadual", "Alta Competição", 
              "Primeiro", "Segundos", "Consecutivos"
            ].map((tag, idx) => (
              <motion.div
                key={idx}
                className="py-1.5 px-2 rounded-full text-xs md:text-sm bg-[#AF8D4A]/10 border border-[#AF8D4A]/30 text-center shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
              >
                <span className="text-white/90">{tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center relative z-10 py-4 md:py-6"
      id={`etapa-${index}`}
    >
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        {isMobile ? (
          // Layout mobile - sempre em coluna com imagem no topo
          <div className="flex flex-col gap-5">
            {/* Imagem/Conteúdo visual no topo para mobile */}
            <motion.div 
              className="w-full flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {etapa.imagem ? (
                <div className="relative w-full max-w-sm mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#AF8D4A]/30 to-transparent rounded-xl blur-md"></div>
                  <img 
                    src={etapa.imagem}
                    alt={etapa.titulo}
                    className="relative z-10 w-full h-auto max-h-[260px] rounded-xl shadow-xl border border-[#AF8D4A]/20 object-cover mx-auto"
                  />
                </div>
              ) : (
                <div className="w-full max-w-sm mx-auto bg-black/50 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-4 shadow-xl">
                  {renderSpecialContent()}
                </div>
              )}
            </motion.div>
            
            {/* Conteúdo textual */}
            <motion.div 
              className="w-full px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2">
                <span className="text-[#AF8D4A] text-xs font-medium bg-[#AF8D4A]/10 px-2 py-0.5 rounded-full">
                  ETAPA {index + 1} / {6}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                {etapa.titulo}
              </h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                {etapa.descricao}
              </p>
              
              {/* Detalhes em grid - aprimorado para mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {etapa.detalhes.map((detalhe, idx) => (
                  <motion.div 
                    key={idx} 
                    className="p-2 sm:p-3 bg-[#AF8D4A]/10 border border-[#AF8D4A]/20 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                  >
                    <p className="text-[#AF8D4A] text-xs font-medium mb-0.5 sm:mb-1">{detalhe.label}</p>
                    <p className="text-white text-base sm:text-lg font-bold">{detalhe.valor}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA apenas na última etapa - melhor centralizado para mobile */}
              {isLast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-5 sm:mt-8 flex justify-center items-center"
                >
                  <button className="bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base shadow-lg w-full sm:max-w-xs mx-auto">
                    <span>Iniciar sua transformação</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        ) : (
          // Layout desktop - alternando entre esquerda e direita
          <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 lg:gap-10 items-center`}>
            {/* Conteúdo textual */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2">
                <span className="text-[#AF8D4A] text-xs font-medium bg-[#AF8D4A]/10 px-2 py-0.5 rounded-full">
                  ETAPA {index + 1} / {6}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                {etapa.titulo}
              </h3>
              <p className="text-white/80 mb-4 text-base md:text-lg">
                {etapa.descricao}
              </p>
              
              {/* Detalhes em grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {etapa.detalhes.map((detalhe, idx) => (
                  <motion.div 
                    key={idx} 
                    className="p-3 bg-[#AF8D4A]/10 border border-[#AF8D4A]/20 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                  >
                    <p className="text-[#AF8D4A] text-xs font-medium mb-1">{detalhe.label}</p>
                    <p className="text-white text-lg font-bold">{detalhe.valor}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA apenas na última etapa */}
              {isLast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-6"
                >
                  <button className="bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors text-base shadow-lg">
                    Iniciar sua transformação
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </motion.div>
            
            {/* Conteúdo visual */}
            <motion.div 
              className="flex-1 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {etapa.imagem ? (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#AF8D4A]/30 to-transparent rounded-xl blur-md"></div>
                  <img 
                    src={etapa.imagem}
                    alt={etapa.titulo}
                    className="relative z-10 max-h-[320px] md:max-h-[380px] rounded-xl shadow-xl border border-[#AF8D4A]/20 object-cover"
                  />
                </div>
              ) : (
                <div className="w-full bg-black/50 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-4 shadow-xl">
                  {renderSpecialContent()}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CristoferSection;