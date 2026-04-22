import { motion } from 'motion/react';
import { CheckCircle2, Clock, FileCheck, Shield, AlertCircle, ChevronRight } from 'lucide-react';

const auditStages = [
  {
    id: 1,
    timestamp: '2026-03-11 14:23:47.234',
    stage: 'Ingestão de Dados',
    actor: 'API Gateway v4.2',
    status: 'verified',
    details: [
      { key: 'Canal de Origem', value: 'Broker Portal REST API' },
      { key: 'Formato de Dados', value: 'JSON (validado)' },
      { key: 'ID da Submissão', value: 'SUB-2026-083472' },
    ],
    duration: '120ms',
    icon: FileCheck,
    color: '#1c17ff',
    auditHash: 'a3f8d9e1c2b4...',
  },
  {
    id: 2,
    timestamp: '2026-03-11 14:23:48.574',
    stage: 'Processamento de IA',
    actor: 'ML Engine #2847',
    status: 'validated',
    details: [
      { key: 'Campos Extraídos', value: '47/47 obrigatórios' },
      { key: 'Confiança do ML', value: '98.7%' },
      { key: 'Versão do Modelo', value: 'v4.2.1-prod' },
    ],
    duration: '1.8s',
    icon: Shield,
    color: '#a44f98',
    auditHash: 'b7c2e4f6a9d1...',
  },
  {
    id: 3,
    timestamp: '2026-03-11 14:23:50.382',
    stage: 'Verificação de Conformidade',
    actor: 'Motor de Conformidade',
    status: 'verified',
    details: [
      { key: 'Regras Regulatórias', value: '124 verificações aprovadas' },
      { key: 'Score de Fraude', value: '0,03% (Limpo)' },
      { key: 'Status KYC', value: 'Verificado' },
    ],
    duration: '420ms',
    icon: AlertCircle,
    color: '#ee7d48',
    auditHash: 'c9d4f1e7b3a2...',
  },
  {
    id: 4,
    timestamp: '2026-03-11 14:23:51.102',
    stage: 'Verificação Final',
    actor: 'Motor de Decisão',
    status: 'approved',
    details: [
      { key: 'Decisão Final', value: 'Aprovado Automaticamente' },
      { key: 'Premium', value: '$1,347,300/year' },
      { key: 'ID da Apólice', value: 'POL-2026-083472' },
    ],
    duration: '720ms',
    icon: CheckCircle2,
    color: '#10b981',
    auditHash: 'd2e8a4c6f9b1...',
  },
];

export function AuditTrailNew() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-4"
          >
            <Clock size={12} className="text-[#1c17ff]" />
            <span 
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Transparência Completa
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
            Cada decisão, permanentemente rastreável
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Cada decisão de subscrição inclui uma trilha de auditoria completa e selada criptograficamente — sem caixas pretas, transparência total
          </motion.p>
        </div>

        {/* Example case header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 p-4 rounded-xl bg-white border border-gray-200/80"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-200"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  APROVADO
                </span>
                <span 
                  className="text-xs text-gray-500"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  ID da Submissão: SUB-2026-083472
                </span>
              </div>
              <h4 
                className="text-sm text-gray-900"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Seguro de Construção
              </h4>
            </div>
            <div className="text-right">
              <div 
                className="text-lg text-[#10b981] mb-0.5"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                2.68s
              </div>
              <div 
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                Processamento total
              </div>
            </div>
          </div>
        </motion.div>

        {/* Audit trail timeline */}
        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1c17ff] via-[#a44f98] to-[#10b981]" />

          {auditStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div 
                  className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border-2 border-white shadow-md"
                  style={{ backgroundColor: `${stage.color}` }}
                >
                  <stage.icon size={24} className="text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 p-5 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-md transition-all duration-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 
                          className="text-base text-gray-900"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                        >
                          {stage.stage}
                        </h4>
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                          {stage.timestamp}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                          {stage.actor}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-sm mb-0.5"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: stage.color }}
                      >
                        {stage.duration}
                      </div>
                      <div 
                        className="text-xs text-gray-500"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                      >
                        Duração
                      </div>
                    </div>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                    {stage.details.map((detail, idx) => (
                      <div key={idx}>
                        <div 
                          className="text-[10px] text-gray-500 uppercase tracking-wider mb-1"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                        >
                          {detail.key}
                        </div>
                        <div 
                          className="text-xs text-gray-900"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                        >
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#1c17ff]/5 via-white to-[#ee7d48]/5 border border-gray-200/60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p 
                className="text-base text-gray-900 mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Trilha de auditoria completa para cada transação
              </p>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                Logs pesquisáveis, relatórios exportáveis e acesso via API para equipes de compliance
              </p>
            </div>
            <button
              data-clickable
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1c17ff] to-[#a44f98] text-white rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              <span>Explorar recursos de auditoria</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}