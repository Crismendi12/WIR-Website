import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Server, Eye, AlertCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'Controles e práticas de segurança auditados de forma independente',
    badge: 'Certificado 2026',
    color: '#1c17ff',
  },
  {
    icon: Lock,
    title: 'Criptografia de Ponta a Ponta',
    description: 'Criptografia AES-256 em repouso, TLS 1.3 em trânsito',
    badge: 'Nível militar',
    color: '#a44f98',
  },
  {
    icon: FileCheck,
    title: 'GDPR & LGPD Compliant',
    description: 'Conformidade total com LGPD (Brasil) e regulamentações globais de proteção de dados',
    badge: 'Verificado',
    color: '#ee7d48',
  },
  {
    icon: Server,
    title: 'Implantação em Nuvem Privada',
    description: 'Opções de infraestrutura dedicada para clientes corporativos',
    badge: 'Disponível',
    color: '#f9b336',
  },
  {
    icon: Eye,
    title: 'Trilha de Auditoria e Registro',
    description: 'Visibilidade completa de todas as ações do sistema e acesso aos dados',
    badge: 'Tempo real',
    color: '#1c17ff',
  },
  {
    icon: AlertCircle,
    title: '99.99% Uptime SLA',
    description: 'Confiabilidade de nível corporativo com monitoramento 24/7',
    badge: 'Garantido',
    color: '#a44f98',
  },
];

export function SecuritySection() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-gray-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200/50 mb-4"
          >
            <Shield size={12} className="text-green-700" />
            <span 
              className="text-[11px] tracking-wider uppercase text-green-800"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
             Segurança e Conformidade Enterprise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl mb-3 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            Construído com segurança de nível segurador
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Construído com os padrões de segurança, governança e conformidade exigidos pelas operações modernas de seguros
          </motion.p>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative p-5 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-md transition-all duration-200 h-full">
                {/* Icon and badge */}
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${feature.color}10` }}
                  >
                    <feature.icon size={20} style={{ color: feature.color }} />
                  </div>
                  <span 
                    className="text-[9px] tracking-wider uppercase px-2 py-1 rounded-md bg-gray-100 text-gray-600"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-[15px] text-gray-900 mb-2 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#1c17ff]/5 via-white to-[#ee7d48]/5 border border-gray-200/60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p 
                className="text-base text-gray-900 mb-0.5"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Confiável por empresas de seguros reguladas
              </p>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                ISO 27001, SOC 2 Type II, GDPR, LGPD e SUSEP compliant
              </p>
            </div>
            <button
              data-clickable
              className="px-5 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm whitespace-nowrap"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Ver documentação de segurança
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}