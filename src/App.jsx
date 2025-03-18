import React from 'react';
import Hero from './components/Hero';
import Beneficios from './components/Beneficios';
import CristoferSection from './components/CristoferSection';

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Beneficios />
      <CristoferSection />
    </div>
  );
};

export default App;