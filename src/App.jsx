import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Target, Brain, Rocket, Award, TrendingUp, ChevronDown, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import logo from './logo-travessia.png';
import antes from './antes.png';
import depois from './depois.jpeg';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
    {/* HERO SECTION MELHORADA */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-0 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-yellow-600/5 blur-3xl"></div>
    <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-yellow-600/5 blur-3xl"></div>
    
    {/* Linhas diagonais animadas */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-yellow-600/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-yellow-600/30 to-transparent"></div>
      
      <div className="absolute -bottom-1/2 -left-1/2 w-1/3 h-full bg-yellow-600/5 rotate-45 blur-3xl"></div>
    </motion.div>
  </div>

  {/* Logo em cima */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
  >
    <img 
      src={logo}
      alt="Logo Método Travessia" 
      className="h-16 md:h-20 w-auto"
    />
  </motion.div>
  
  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-center max-w-4xl z-10 relative"
  >
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="flex justify-center mb-8"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4
          }}
          className="relative z-10"
        >
          <Plane size={70} className="text-yellow-600" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 3
          }}
          className="absolute -inset-6 rounded-full bg-yellow-600/10 blur-md"
        ></motion.div>
      </div>
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-4xl md:text-7xl font-bold mb-6 tracking-wide"
    >
      <div className="relative inline-block">
        <span className="text-yellow-600 relative z-10">MÉTODO</span> 
        <motion.div 
          className="absolute -bottom-1 left-0 h-1 bg-yellow-600 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>{" "}
      <div className="relative inline-block">
        <span className="text-white relative z-10">TRAVESSIA</span>
        <motion.div 
          className="absolute -bottom-1 left-0 h-1 bg-yellow-600 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
      </div>
    </motion.h1>

    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-xl md:text-3xl font-bold mb-10 text-yellow-600"
    >
      Do autoconhecimento à alta performance
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="text-lg md:text-xl space-y-3 mb-10 relative"
    >
      <p className="text-gray-300">Destrave sua mente e alcance novos níveis</p>
      <p className="text-gray-300">Mentoria para quem quer mais da vida</p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }} 
        className="flex justify-center mt-6"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto"></div>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
    >
      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(202, 138, 4, 0.4)" 
        }}
        whileTap={{ scale: 0.98 }}
        className="bg-yellow-600 text-black font-bold text-lg md:text-xl px-10 py-4 rounded-none border-2 border-transparent hover:bg-black hover:text-yellow-600 hover:border-yellow-600 transition-all duration-300 tracking-wider relative overflow-hidden group"
      >
        <span className="relative z-10">MUDAR AGORA</span>
        <span className="absolute inset-0 bg-yellow-600 group-hover:opacity-0 transition-opacity duration-300"></span>
        <span className="absolute top-0 left-0 right-0 h-0.5 w-full bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        <span className="absolute bottom-0 left-0 right-0 h-0.5 w-full bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
        <span className="absolute left-0 top-0 bottom-0 w-0.5 h-full bg-yellow-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
        <span className="absolute right-0 top-0 bottom-0 w-0.5 h-full bg-yellow-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
      </motion.button>
    </motion.div>
  </motion.div>

  {/* Scroll indicator */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8 }}
    className="absolute bottom-8 z-10"
  >
    <motion.div 
      animate={{ y: [0, 8, 0] }} 
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="flex flex-col items-center"
    >
      <div className="text-gray-400 text-sm mb-2 tracking-widest">CONHEÇA</div>
      <ChevronDown className="text-yellow-600" size={32} />
    </motion.div>
  </motion.div>
  
  {/* Decorative elements */}
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
</section>

      {/* BENEFÍCIOS SECTION */}
      <section className="py-20 bg-black border-t border-yellow-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-yellow-600">BENEFÍCIOS</span>
            </h2>
            <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Descubra como o Método Travessia pode elevar seu desempenho a níveis que você nunca imaginou possíveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="text-yellow-600" size={42} />,
                title: "Reprogramação Mental",
                description: "Elimine crenças limitantes e desenvolva uma mentalidade de sucesso absoluto que impulsiona resultados extraordinários."
              },
              {
                icon: <Target className="text-yellow-600" size={42} />,
                title: "Foco Inabalável",
                description: "Desenvolva técnicas avançadas para manter o foco em seus objetivos, mesmo em ambientes de alta pressão e distração."
              },
              {
                icon: <TrendingUp className="text-yellow-600" size={42} />,
                title: "Produtividade Exponencial",
                description: "Aprenda sistemas comprovados para multiplicar sua produtividade e conquistar mais resultados em menos tempo."
              },
              {
                icon: <Award className="text-yellow-600" size={42} />,
                title: "Resultados Garantidos",
                description: "Aplicando a mesma metodologia que levou Cristofer à aprovação em múltiplos concursos públicos de alta competitividade."
              },
              {
                icon: <Plane className="text-yellow-600" size={42} />,
                title: "Transformação Completa",
                description: "Transformação integral do corpo e mente, seguindo o mesmo processo que permitiu a Cristofer superar a obesidade."
              },
              {
                icon: <Rocket className="text-yellow-600" size={42} />,
                title: "Alta Performance",
                description: "Desenvolva o mindset e os hábitos dos indivíduos de maior desempenho do mundo para resultados consistentes."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-yellow-600/20 hover:border-yellow-600/50 bg-black hover:bg-black/80 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-600">{benefit.title}</h3>
                <p className="text-gray-400 md:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA DO CRISTOFER - VERSÃO REFORMULADA */}
<section className="py-24 bg-black border-t border-yellow-600/20 overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16 md:mb-20 px-4"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 relative inline-block">
        <span className="relative z-10 block sm:inline">A JORNADA DE</span>
        <span className="text-yellow-600 relative z-10 block sm:inline sm:ml-2">CRISTOFER LEONE</span>
        <motion.div 
          className="absolute -bottom-3 left-0 h-1 bg-yellow-600 w-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </h2>
    </motion.div>
    
    <div className="max-w-6xl mx-auto">
      {/* Timeline Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        
        {/* Imagem Antes/Depois - Coluna Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative order-2 lg:order-1"
        >
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2 relative p-1 bg-yellow-600">
              <div className="p-1 bg-black">
                <img 
                  src={antes} 
                  alt="Cristofer Leone Antes" 
                  className="w-full object-cover h-64 sm:h-80"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 bg-black border border-yellow-600">
                  <span className="text-yellow-600 font-bold text-base sm:text-xl tracking-widest">ANTES</span>
                </div>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 relative p-1 bg-yellow-600">
              <div className="p-1 bg-black">
                <img 
                  src={depois} 
                  alt="Cristofer Leone Depois" 
                  className="w-full object-cover h-64 sm:h-80"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 bg-black border border-yellow-600">
                  <span className="text-yellow-600 font-bold text-base sm:text-xl tracking-widest">DEPOIS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Timeline Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0"
        >
          <div className="relative flex lg:flex-col items-center justify-center">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block h-full w-1 bg-gradient-to-b from-yellow-600/0 via-yellow-600 to-yellow-600/0"></div>
            
            {/* Horizontal line for mobile */}
            <div className="block lg:hidden w-full h-1 bg-gradient-to-r from-yellow-600/0 via-yellow-600 to-yellow-600/0"></div>
            
            <div className="flex lg:flex-col justify-between items-center w-full lg:h-full lg:w-auto">
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center border-2 border-yellow-600">
                  <Brain size={24} className="text-yellow-600" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.9, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="relative mx-4 lg:mx-0 lg:my-8"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center border-2 border-yellow-600">
                  <Target size={24} className="text-yellow-600" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center border-2 border-yellow-600">
                  <Rocket size={24} className="text-yellow-600" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Conquistas - Coluna Direita */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative order-3"
        >
          <div className="relative z-10 bg-black border border-yellow-600/30 p-8 h-full">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-600"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-600"></div>
            
            <h3 className="text-2xl text-yellow-600 font-bold mb-8 relative">
              Transformação & Conquistas
              <div className="absolute bottom-0 left-0 w-1/3 h-px bg-yellow-600"></div>
            </h3>
            
            {/* Lista de conquistas em formato de cards */}
            <div className="space-y-5">
              {[
                {
                  title: "Superação Física",
                  desc: "De uma batalha contra a obesidade à criação de um sistema próprio de performance física",
                  icon: <Award className="text-yellow-600" size={20} />
                },
                {
                  title: "Excelência Acadêmica",
                  desc: "Múltiplas aprovações em concursos públicos utilizando técnicas avançadas de estudo",
                  icon: <TrendingUp className="text-yellow-600" size={20} />
                },
                {
                  title: "Desenvolvimento do Método",
                  desc: "Criação do Método Travessia após anos de estudo e aplicação prática",
                  icon: <Brain className="text-yellow-600" size={20} />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group flex bg-black border border-yellow-600/10 hover:border-yellow-600/30 p-4 transition-all duration-300"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-yellow-600/10 group-hover:bg-yellow-600/20 flex items-center justify-center transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Citação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 relative px-4"
      >
        <div className="absolute -left-3 top-0 text-4xl sm:text-6xl text-yellow-600 font-serif opacity-30">"</div>
        <div className="absolute -right-3 bottom-0 text-4xl sm:text-6xl text-yellow-600 font-serif opacity-30">"</div>
        
        <div className="relative z-10 py-8 sm:py-10 px-6 sm:px-12 bg-black border-l-4 border-yellow-600">
          <p className="italic text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            O Método Travessia nasceu da minha própria jornada de superação. Compreendi que para atingir a alta performance em qualquer área da vida, precisamos primeiro fazer uma travessia interna, reconhecendo e superando nossas limitações mentais. É este conhecimento transformador que hoje compartilho com meus alunos.
          </p>
          <div className="mt-6 flex items-center">
            <div className="h-px w-8 sm:w-12 bg-yellow-600 mr-4"></div>
            <p className="text-yellow-600 font-semibold">Cristofer Leone</p>
          </div>
        </div>
      </motion.div>
      
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16 md:mt-20 px-4"
      >
        <motion.button
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 0 20px rgba(202, 138, 4, 0.4)" 
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-yellow-600 text-black font-bold text-base sm:text-lg w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 rounded-none border-2 border-transparent hover:bg-black hover:text-yellow-600 hover:border-yellow-600 transition-all duration-300 tracking-wider"
        >
          INICIAR MINHA TRAVESSIA AGORA
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-yellow-600/20 bg-black">
        <div className="container mx-auto px-4">
          <img 
            src={logo}
            alt="Logo Método Travessia" 
            className="h-10 w-auto mx-auto mb-4"
          />
         
          <p className="text-gray-500 text-sm">© 2025 Cristofer Leone. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm mt-1">Desenvolvido por WebBraze</p>
        </div>
      </footer>
    </div>
  );
}

export default App;