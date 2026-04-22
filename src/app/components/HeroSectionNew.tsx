import { motion } from 'motion/react';
import { ArrowRight, Building2, Users, Hospital, Network } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    label: 'Seguradoras',
    sublabel: 'Todas as linhas',
    color: '#1c17ff',
    gradient: 'from-[#1c17ff]/10 to-transparent',
  },
  {
    icon: Users,
    label: 'Corretoras',
    sublabel: 'Redes de distribuição',
    color: '#a44f98',
    gradient: 'from-[#a44f98]/10 to-transparent',
  },
  {
    icon: Hospital,
    label: 'Operadoras de Saúde',
    sublabel: 'Planos & HMOs',
    color: '#ee7d48',
    gradient: 'from-[#ee7d48]/10 to-transparent',
  },
  {
    icon: Network,
    label: 'Resseguradoras',
    sublabel: 'Capacidade global',
    color: '#f9b336',
    gradient: 'from-[#f9b336]/10 to-transparent',
  },
];

export function HeroSectionNew() {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-6 overflow-hidden bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c17ff]/[0.02] via-white to-[#ee7d48]/[0.02] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Pre-launch badge */}
        

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 tracking-tight"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
            A Plataforma de IA para
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] bg-clip-text text-transparent">
            escalar operações de seguros
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed px-4"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
        >
          Automatize subscrição, distribuição e crescimento com agentes de IA — sem substituir seus sistemas atuais.
        </motion.p>

        {/* Founder voice */}
        

        {/* CTA buttons */}
        

        {/* Ecosystem tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-6"
        >
          <p 
            className="text-[11px] tracking-wider uppercase text-gray-500 mb-4"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Construído para o Ecossistema de Seguros
          </p>
        </motion.div>

        {/* Audience cards - compact and premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="relative group"
            >
              <div className={`relative p-4 rounded-xl bg-gradient-to-br ${audience.gradient} border border-gray-200/60 hover:border-gray-300/60 transition-all duration-200 hover:shadow-md`}>
                <div className="flex flex-col items-center gap-2.5">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${audience.color}15` }}
                  >
                    <audience.icon size={18} style={{ color: audience.color }} />
                  </div>
                  <span 
                    className="text-[13px] text-gray-700 text-center"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    {audience.label}
                  </span>
                  <span 
                    className="text-[11px] text-gray-500 text-center"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {audience.sublabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#1c17ff]" />
            <span className="text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              SOC 2 Type II
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#a44f98]" />
            <span className="text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              ISO 27001
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#ee7d48]" />
            <span className="text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              GDPR Compliant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#f9b336]" />
            <span className="text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Enterprise SLA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}