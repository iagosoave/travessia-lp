import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logoTravessia from './logo-travessia.png';

const MetodoTravessiaHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background gradient elements - Redesigned shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal stripe across top-left to bottom-right */}
        <div className="absolute -top-20 -left-20 right-0 h-1/2 bg-gradient-to-br from-[#AF8D4A]/15 via-[#AF8D4A]/10 to-transparent transform rotate-6"></div>
        
        {/* Circle in top-right corner */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-[#AF8D4A]/20 via-[#AF8D4A]/5 to-transparent blur-md"></div>
        
        {/* Wavy shape at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#AF8D4A]/20 via-[#AF8D4A]/10 to-transparent 
                      mask-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]"></div>
        
        {/* Small accent circles */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#AF8D4A]/15 to-transparent blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-l from-[#AF8D4A]/20 to-transparent blur-md"></div>
      </div>

      {/* Main content container */}
      <div className="container max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
        {/* Logo centered at top */}
        <div className="flex justify-center mb-12">
          <img 
            src={logoTravessia} 
            alt="Método Travessia" 
            className="h-16 md:h-20 object-contain"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text Content */}
          <div className="flex flex-col w-full lg:items-start">
            {/* Main heading with gradient text - Improved alignment */}
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 text-center lg:text-left w-full">
              <span className="inline-block w-full lg:w-auto">Do autoconhecimento</span>
              <span className="inline-block w-full lg:w-auto">à alta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">performance</span></span>
            </h1>
            
            {/* Description with slightly transparent text */}
            <p className="text-white/75 text-lg mb-8 max-w-xl leading-relaxed text-center lg:text-left w-full">
              Destrave sua mente e alcance novos patamares em sua vida através das técnicas exclusivas da nossa mentoria.
            </p>
            
            {/* CTA Button */}
            <div className="flex w-full justify-center lg:justify-start">
              <button className="bg-[#AF8D4A] text-white font-medium py-3 px-8 rounded-md flex items-center transition-all duration-300 hover:bg-[#8C7239] mb-8">
                Iniciar Transformação
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Right column - Video */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-xl">
            {/* Background shapes for video - redesigned gold accents */}
            <div className="absolute -top-6 -right-6 w-full h-1/2 bg-gradient-to-bl from-[#AF8D4A]/25 to-transparent skew-x-12 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-3/4 h-1/2 bg-gradient-to-tr from-[#AF8D4A]/20 to-transparent rounded-tl-3xl blur-lg"></div>
            <div className="absolute top-1/2 left-0 w-16 h-32 bg-[#AF8D4A]/10 rounded-full blur-md transform -rotate-45"></div>
            
            {/* Video container */}
            <div className="relative aspect-video bg-black/80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(175,141,74,0.2)] border border-[#AF8D4A]/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ISWPjlt6hes?rel=0&showinfo=0"
                title="Método Travessia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Icon features grid - Now below the video */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
            {/* Autoconhecimento Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#AF8D4A] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <span className="text-white/80 text-xs">Autoconhecimento<br />Profundo</span>
            </div>
            
            {/* Alta Performance Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#AF8D4A] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/80 text-xs">Alta<br />Performance</span>
            </div>
            
            {/* Transformação Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#AF8D4A] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/80 text-xs">Transformação<br />Mental</span>
            </div>
            
            {/* Mindset Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#AF8D4A] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </div>
              <span className="text-white/80 text-xs">Mindset<br />Vitorioso</span>
            </div>
            
            {/* Desenvolvimento Icon */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#AF8D4A] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <span className="text-white/80 text-xs">Desenvolvimento<br />Pessoal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodoTravessiaHero;