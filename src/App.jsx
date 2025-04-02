import React from 'react';
import Hero from './components/Hero';
import Beneficios from './components/Beneficios';
import CristoferSection from './components/CristoferSection';
import MentoriaSection from './components/MentoriaSection';
import TransformacaoCompletaSection from './components/TransformacaoCompletaSection';
import CTASection from './components/CTASection'; 
import FAQSection from './components/FAQsection'; 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Beneficios />
      <CristoferSection />
      <MentoriaSection />
      <TransformacaoCompletaSection />
      < CTASection/>
      < FAQSection/>
      < Footer/>
    </div>
  );
};

export default App;