import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Clock, Users, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CTASection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Inicializa o EmailJS com sua chave pública
    emailjs.init("0GCowirbv2hrggGDt");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Configuração do EmailJS com os IDs corretos
    const serviceId = 'service_ac994qj';
    const templateId = 'template_cjazjqk';
    const publicKey = '0GCowirbv2hrggGDt';
    
    // Preparando os parâmetros do template com as variáveis corretas
    const templateParams = {
      from_name: formName,
      reply_to: formEmail,
      phone_number: formPhone,
      message: formMessage
    };
    
    // Enviando o email usando EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCESSO!', response.status, response.text);
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormName('');
        setFormEmail('');
        setFormPhone('');
        setFormMessage('');
        
        // Reset da mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((erro) => {
        console.log('FALHA...', erro);
        setIsSubmitting(false);
        setShowError(true);
        
        // Reset da mensagem de erro após 5 segundos
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      });
  };

  return (
    <section
      id="solicitar-orcamento"
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#AF8D4A]/5 rounded-tr-full"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Comece Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37]">Travessia</span> Agora
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Solicite um orçamento personalizado e garanta sua vaga
          </p>
        </motion.div>

        {/* CTA conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Benefícios e urgência - 2 colunas em desktop */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Card de disponibilidade limitada */}
            <div className="bg-[#AF8D4A]/10 backdrop-blur-sm border border-[#AF8D4A]/30 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#AF8D4A]/20 p-2 rounded-full">
                  <Clock className="text-[#AF8D4A] w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg">Vagas Limitadas</h3>
              </div>
              
              <p className="text-white/80 text-sm mb-4">
                Para garantir atendimento personalizado e resultados excepcionais, 
                o número de vagas é limitado. Responderemos à sua solicitação em até 24h.
              </p>
              
              {/* Indicador de disponibilidade */}
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/80">Disponibilidade</span>
                  <span className="text-[#AF8D4A] font-semibold">73% preenchido</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#AF8D4A] to-[#D4AF37] h-2 rounded-full" 
                    style={{ width: '73%' }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Benefícios do programa */}
            <div className="bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-5">
              <h3 className="text-white font-bold text-lg mb-4">O Que Você Vai Receber:</h3>
              
              <ul className="space-y-3">
                {[
                  "Programa personalizado para suas necessidades",
                  "Acesso a todas as mentorias semanais ao vivo",
                  "Suporte direto de Cristofer Leone",
                  "Método Travessia completo com 4 pilares",
                  "Comunidade exclusiva de apoio",
                  "Acesso vitalício às atualizações"
                ].map((benefit, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                  >
                    <Check className="text-[#AF8D4A] w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Elementos sociais */}
              <div className="mt-6 pt-4 border-t border-[#AF8D4A]/20">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Users className="w-4 h-4" />
                  <span>Mais de 500 pessoas já transformadas</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulário de contato - 3 colunas em desktop */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-6 md:p-8">
              <h3 className="text-white font-bold text-xl mb-6">Solicitar Orçamento Personalizado</h3>
              
              {showSuccess ? (
                <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-500/20 p-1 rounded-full">
                      <Check className="text-green-500 w-4 h-4" />
                    </div>
                    <h4 className="text-white font-semibold">Solicitação Enviada!</h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    Recebemos sua solicitação com sucesso. Nossa equipe entrará em contato em até 24 horas com seu orçamento personalizado.
                  </p>
                </div>
              ) : showError ? (
                <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-red-500/20 p-1 rounded-full">
                      <X className="text-red-500 w-4 h-4" />
                    </div>
                    <h4 className="text-white font-semibold">Erro ao Enviar</h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white/80 text-sm mb-1">Seu Nome</label>
                      <input
                        type="text"
                        id="name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white/5 border border-[#AF8D4A]/30 rounded-lg p-3 text-white focus:border-[#AF8D4A] focus:outline-none focus:ring-1 focus:ring-[#AF8D4A]"
                        placeholder="Nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm mb-1">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full bg-white/5 border border-[#AF8D4A]/30 rounded-lg p-3 text-white focus:border-[#AF8D4A] focus:outline-none focus:ring-1 focus:ring-[#AF8D4A]"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white/80 text-sm mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-white/5 border border-[#AF8D4A]/30 rounded-lg p-3 text-white focus:border-[#AF8D4A] focus:outline-none focus:ring-1 focus:ring-[#AF8D4A]"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm mb-1">O que você busca transformar?</label>
                    <textarea
                      id="message"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-white/5 border border-[#AF8D4A]/30 rounded-lg p-3 text-white focus:border-[#AF8D4A] focus:outline-none focus:ring-1 focus:ring-[#AF8D4A] min-h-[100px]"
                      placeholder="Conte um pouco sobre seus objetivos e desafios..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#AF8D4A] hover:bg-[#8F6D3A] text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span>Solicitar Orçamento</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
              
              {/* Mensagem de segurança */}
              <div className="mt-4 text-center">
                <p className="text-white/60 text-xs flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Suas informações estão seguras e não serão compartilhadas
                </p>
              </div>
            </div>
            
            {/* FAQ rápido */}
            <div className="mt-6 bg-black/30 backdrop-blur-sm border border-[#AF8D4A]/20 rounded-xl p-5">
              <h3 className="text-white font-bold text-lg mb-4">Perguntas Frequentes</h3>
              
              <div className="space-y-3">
                {[
                  {
                    pergunta: "Como funciona o orçamento personalizado?",
                    resposta: "Após analisar seus objetivos, entraremos em contato com um orçamento adaptado às suas necessidades específicas."
                  },
                  {
                    pergunta: "Quanto tempo leva para receber retorno?",
                    resposta: "Nossa equipe entrará em contato em até 24 horas úteis após o recebimento da sua solicitação."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="border-b border-[#AF8D4A]/10 pb-3">
                    <h4 className="text-white font-medium text-sm mb-1">{faq.pergunta}</h4>
                    <p className="text-white/70 text-xs">{faq.resposta}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;