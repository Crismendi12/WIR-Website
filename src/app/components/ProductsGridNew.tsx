import { motion } from 'motion/react';
import { Zap, Shield, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    code: 'SSA',
    name: 'Smart Sales Automation',
    icon: Zap,
    tagline: 'Inteligência em vendas e distribuição',
    description: 'Pipeline de IA que pontua, roteia e converte leads automaticamente',
    features: [
      'Pontuação de leads em tempo real com modelos de ML',
      'Roteamento automático de fluxos de trabalho',
      'Análise preditiva de conversão',
    ],
    impact: [
      { metric: 'Maior', label: 'Conversão' },
      { metric: 'Mais rápida', label: 'Qualificação de leads' },
      { metric: 'Mais inteligente', label: 'Priorização de brokers' },
    ],
    color: '#1c17ff',
  },
  {
    code: 'UCP',
    name: 'Underwriter Co-Pilot',
    icon: Shield,
    tagline: 'Avaliação instantânea de risco e geração de cotações',
    description: 'Assistente de IA que gerencia extração de dados, validação e análise preliminar',
    features: [
      'Processamento automatizado de documentos',
      'Motor de pontuação de risco com mais de 300 fatores',
      'Verificações de conformidade regulatória',
    ],
    impact: [
      { metric: 'Dashboard', label: 'Dashboard do underwriter' },
      { metric: 'Dias→Min', label: 'De dias para minutos' },
      { metric: 'Menor', label: 'Custo operacional' },
    ],
    color: '#a44f98',
  },
  {
    code: 'XBA',
    name: 'X-sell Brokers Automation',
    icon: TrendingUp,
    tagline: 'Inteligência e automação de cross-sell',
    description: 'Identifica oportunidades e automatiza campanhas de cross-sell na sua rede de brokers',
    features: [
      'Análise de portfólio de clientes',
      'Pontuação de oportunidades de cross-sell',
      'Fluxos de trabalho automatizados de campanha',
    ],
    impact: [
      { metric: 'Mais', label: 'Penetração de produtos' },
      { metric: 'Maior', label: 'Retenção de clientes' },
      { metric: 'Menos', label: 'Churn' },
    ],
    color: '#ee7d48',
  },
  {
    code: 'SNB',
    name: 'SDR New Business',
    icon: Users,
    tagline: 'Automação inteligente de outbound',
    description: 'Motor de outbound com IA que qualifica prospects e agenda reuniões de alto valor',
    features: [
      'Pontuação e priorização de prospects',
      'Automação de outreach multicanal',
      'Qualificação e agendamento de reuniões',
    ],
    impact: [
      { metric: 'Qualificadas', label: 'Reuniões' },
      { metric: 'Menor', label: 'Custo de aquisição' },
      { metric: 'Mais', label: 'Novo pipeline' },
    ],
    color: '#f9b336',
  },
];

const summaryStats = [
  { value: '15+', label: 'Modelos de IA', sublabel: 'Grau de produção' },
  { value: '<4s', label: 'Velocidade de Processamento', sublabel: 'Tempo médio de decisão' },
  { value: '~91.7%', label: 'Precisão', sublabel: 'Precisão do modelo de ML' },
];

export function ProductsGridNew() {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#1c17ff] animate-pulse" />
            <span 
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Suíte de Produtos
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
            Quatro produtos de IA. Uma plataforma.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Infraestrutura de IA que se conecta aos seus sistemas existentes. Sem migração, sem downtime, impacto imediato.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-lg transition-all duration-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <product.icon size={22} style={{ color: product.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md"
                          style={{ 
                            fontFamily: 'Sora, sans-serif', 
                            fontWeight: 700,
                            backgroundColor: `${product.color}15`,
                            color: product.color
                          }}
                        >
                          {product.code}
                        </span>
                      </div>
                      <h3 
                        className="text-lg text-gray-900 mb-0.5"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                      >
                        {product.name}
                      </h3>
                      <p 
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                      >
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-sm text-gray-700 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4 space-y-1.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gray-400 mt-0.5 shrink-0" />
                      <span 
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Impact metrics */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-3">
                    {product.impact.map((stat, idx) => (
                      <div key={idx}>
                        <div 
                          className="text-base mb-0.5"
                          style={{ 
                            fontFamily: 'Sora, sans-serif', 
                            fontWeight: 700,
                            color: product.color
                          }}
                        >
                          {stat.metric}
                        </div>
                        <div 
                          className="text-[10px] text-gray-600 leading-tight"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p 
                className="text-base text-gray-900 mb-1"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Construído para implantação em escala enterprise
              </p>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Implantação multi-região • SLA de 99.99% uptime • Segurança enterprise
              </p>
            </div>
            <div className="flex items-center gap-8">
              {summaryStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-2xl md:text-3xl mb-0.5 bg-gradient-to-r from-[#1c17ff] to-[#ee7d48] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-sm text-gray-900 mb-0.5"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    className="text-xs text-gray-500"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  >
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}