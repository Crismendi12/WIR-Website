import { motion } from 'motion/react';
import { ArrowRight, Mail, Calendar, Bell } from 'lucide-react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

export function ClosingCTANew() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Aqui você pode adicionar a lógica de envio para o backend
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c17ff]/[0.02] via-transparent to-[#ee7d48]/[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-5">
            <Bell className="w-3.5 h-3.5 text-[#1c17ff] animate-pulse" />
            <span 
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Fique por dentro
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl mb-4 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: 1.2 }}
          >
            Faça parte da nossa
            <br />
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] bg-clip-text text-transparent">
              newsletter
            </span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.6 }}
          >
            Receba insights exclusivos sobre IA em seguros, atualizações do produto e análises de mercado direto na sua caixa de entrada.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-10">
            <span className="flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#1c17ff]" />
              Insights semanais
            </span>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#a44f98]" />
              Tendências de IA
            </span>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#ee7d48]" />
              Análises de mercado
            </span>
          </div>

          {/* Newsletter Form - Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl mx-auto mb-12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="flex-1 px-5 py-4 rounded-lg border border-gray-300 focus:border-[#1c17ff] focus:ring-2 focus:ring-[#1c17ff]/20 outline-none transition-all text-base"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              />
              <button
                type="submit"
                data-clickable
                className="group px-8 py-4 bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] text-white rounded-lg shadow-lg shadow-[#1c17ff]/20 hover:shadow-xl hover:shadow-[#1c17ff]/30 transition-all duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                <span className="flex items-center gap-2">
                  Inscrever-se
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Enviamos apenas conteúdo relevante. Cancele a qualquer momento.
            </p>
          </motion.div>

          {/* Contact options */}
          <div className="space-y-6 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <a 
                href="mailto:contato@wirinnovation.ai"
                data-clickable
                className="flex items-center gap-2 hover:text-[#1c17ff] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                <Mail size={16} />
                <span>contato@wirinnovation.ai</span>
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <a 
                href="https://calendly.com/wir-innovation"
                target="_blank"
                rel="noopener noreferrer"
                data-clickable
                className="flex items-center gap-2 hover:text-[#1c17ff] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                <Calendar size={16} />
                <span>Agende uma conversa</span>
              </a>
            </div>

            {/* Social media icons */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com/wirinnovation"
                target="_blank"
                rel="noopener noreferrer"
                data-clickable
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1c17ff] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com/wirinnovation"
                target="_blank"
                rel="noopener noreferrer"
                data-clickable
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1c17ff] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/wir-innovation"
                target="_blank"
                rel="noopener noreferrer"
                data-clickable
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1c17ff] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/wirinnovation"
                target="_blank"
                rel="noopener noreferrer"
                data-clickable
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1c17ff] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-12 border-t border-gray-200"
        >
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            O que você receberá
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'Semanal', label: 'Frequência de envio' },
              { value: '5 min', label: 'Tempo de leitura' },
              { value: '100%', label: 'Conteúdo relevante' },
              { value: '0 spam', label: 'Garantido' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-2xl md:text-3xl mb-1 bg-gradient-to-r from-[#1c17ff] to-[#a44f98] bg-clip-text text-transparent"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-xs text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}