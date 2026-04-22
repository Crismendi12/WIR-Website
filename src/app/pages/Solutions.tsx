import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FluidBackground } from '../components/FluidBackground';
import { SimpleCursor } from '../components/SimpleCursor';
import { motion } from 'motion/react';
import { 
  Layers, 
  DollarSign, 
  Globe2, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Network,
  Zap,
  Target
} from 'lucide-react';

const solutions = [
  {
    title: 'Seguradoras',
    icon: Building2,
    tagline: 'Automação operacional end-to-end',
    description: 'Implante infraestrutura de IA em subscrição, sinistros, precificação e compliance. Transforme semanas de trabalho manual em decisões automatizadas instantâneas mantendo controle e supervisão total.',
    useCases: [
      'Subscrição automatizada com regras de risco configuráveis',
      'Intake de sinistros, triagem e detecção de fraudes',
      'Precificação dinâmica e avaliação de risco de portfólio',
      'Monitoramento e relatórios de compliance em tempo real',
      'Automação de workflow de administração de apólices',
      'Autoatendimento ao cliente e extração de documentos',
    ],
    benefits: [
      { metric: '<2min', label: 'Cotação', detail: 'vs. 47 dias média do setor' },
      { metric: '97%', label: 'Taxa STP', detail: 'Processamento direto' },
      { metric: '-68%', label: 'Custos operacionais', detail: 'Trabalho manual eliminado' },
    ],
    color: '#1c17ff',
  },
  {
    title: 'Corretoras & MGAs',
    icon: Users,
    tagline: 'Plataforma de aceleração de distribuição',
    description: 'Equipe sua rede de distribuição com ferramentas de cotação, subscrição e colocação alimentadas por IA. Aumente taxas de conversão e qualidade de portfólio reduzindo carga administrativa do corretor.',
    useCases: [
      'Agregação e comparação de cotações multi-seguradoras',
      'Scoring inteligente de leads e priorização de oportunidades',
      'Montagem automatizada de pacotes de submissão',
      'Matching de apetite de seguradoras em tempo real',
      'Rastreamento de comissões e analytics de performance',
      'Inteligência de retenção de clientes e cross-sell',
    ],
    benefits: [
      { metric: '8x', label: 'Velocidade de cotação', detail: 'Mesma equipe, mais negócios' },
      { metric: '+73%', label: 'Taxa de conversão', detail: 'Melhores submissões' },
      { metric: '4.2x', label: 'Capacidade do corretor', detail: 'Foco em vendas' },
    ],
    color: '#a44f98',
  },
  {
    title: 'Operadoras de Saúde',
    icon: Shield,
    tagline: 'Inteligência em operações de saúde',
    description: 'Automatize cadastro de beneficiários, adjudicação de sinistros, revisão de utilização e gestão de rede credenciada. Reduza custos administrativos melhorando experiência do beneficiário e qualidade do cuidado.',
    useCases: [
      'Verificação automatizada de elegibilidade e cadastro',
      'Auto-adjudicação de sinistros e processamento de pagamentos',
      'Automação de workflow de autorização prévia',
      'Gestão de utilização e fechamento de gaps de cuidado',
      'Credenciamento de prestadores e otimização de rede',
      'Autoatendimento ao beneficiário e navegação de cuidados',
    ],
    benefits: [
      { metric: '91%', label: 'Auto-adjudicação', detail: 'Sinistros processados instantaneamente' },
      { metric: '-54%', label: 'Custos admin', detail: 'Por beneficiário por mês' },
      { metric: '<4hrs', label: 'Turnaround autorizações', detail: 'vs. 3-5 dias manual' },
    ],
    color: '#ee7d48',
  },
  {
    title: 'Resseguradoras',
    icon: Globe2,
    tagline: 'Otimização de capacidade global',
    description: 'Gerencie colocações de contratos e facultativos com precisão de IA. Automatize processamento de borderôs, monitoramento de portfólio e análise de acumulação de catástrofes em operações globais.',
    useCases: [
      'Administração e contabilidade automatizada de contratos',
      'Agregação de portfólio em tempo real e monitoramento de exposição',
      'Modelagem de catástrofes e controle de acumulação',
      'Geração de cotações facultativas e colocação',
      'Validação e reconciliação de borderôs',
      'Otimização e alocação de retrocessão',
    ],
    benefits: [
      { metric: '<8hrs', label: 'Cotação fac', detail: 'vs. 3-7 dias manual' },
      { metric: '99.7%', label: 'Precisão de dados', detail: 'Validação automatizada' },
      { metric: '-82%', label: 'Overhead admin', detail: 'Gestão de contratos' },
    ],
    color: '#f9b336',
  },
];

const integrationApproach = {
  stack: {
    title: 'Enterprise Integration Architecture',
    description: 'API-first architecture that layers on top of your existing core systems. Deploy in weeks, not months, with zero disruption to current operations.',
    features: [
      'RESTful & GraphQL APIs for any core platform (Guidewire, Duck Creek, Majesco)',
      'Pre-built connectors for policy admin, billing, claims systems',
      'Real-time bidirectional data sync with conflict resolution',
      'Incremental rollout with A/B testing capabilities',
      'SOC 2 Type II, HIPAA, and PCI DSS compliant infrastructure',
    ],
  },
  deployment: {
    title: 'Deployment Models',
    description: 'Flexible deployment options designed for enterprise security, compliance, and performance requirements.',
    models: [
      {
        name: 'Cloud SaaS',
        description: 'Multi-tenant cloud deployment with dedicated instances',
        icon: Zap,
        color: '#1c17ff',
      },
      {
        name: 'Private Cloud',
        description: 'Single-tenant deployment in your preferred cloud (AWS/Azure/GCP)',
        icon: Shield,
        color: '#a44f98',
      },
      {
        name: 'On-Premise',
        description: 'Dedicated infrastructure deployment behind your firewall',
        icon: Target,
        color: '#ee7d48',
      },
    ],
  },
  businessModel: {
    title: 'Revenue Model',
    description: 'Transparent pricing aligned with your success. No hidden fees, no vendor lock-in, no per-seat licensing games.',
    breakdown: [
      { 
        percentage: '60%', 
        type: 'Platform Licensing', 
        detail: 'Annual subscription based on transaction volume or premium processed',
        icon: Layers,
      },
      { 
        percentage: '30%', 
        type: 'Performance Incentives', 
        detail: 'Success fees tied to measurable efficiency gains and cost reduction',
        icon: TrendingUp,
      },
      { 
        percentage: '10%', 
        type: 'Professional Services', 
        detail: 'Implementation, training, and ongoing optimization support',
        icon: Users,
      },
    ],
  },
};

export default function Solutions() {
  return (
    <>
      {/* Hero Section - Cleaner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6" style={{ fontFamily: 'Sora, sans-serif' }}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-[10px] text-[#a44f98] tracking-[0.4em] uppercase mb-6 px-4 py-2 rounded-full bg-[#a44f98]/10"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Solutions
              </span>
              
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-6 leading-[1.08]"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                IA para cada{' '}
                <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                  papel no mercado segurador
                </span>
              </h1>
              
              <p
                className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                Seguradoras, corretoras, MGAs, resseguradoras — nossa infraestrutura de IA se integra aos seus workflows.
                Sem migração, sem downtime, impacto imediato
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </section>

        {/* Integration & Business Model Section */}
        <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-20 md:py-28 px-6">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span
                className="inline-block text-[10px] text-[#1c17ff] tracking-[0.4em] uppercase mb-4 px-4 py-2 rounded-full bg-[#1c17ff]/10"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                How We Work
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 max-w-3xl mx-auto leading-[1.1]"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                Enterprise-grade{' '}
                <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                  infrastructure
                </span>
              </h2>
              <p
                className="text-sm text-gray-600 max-w-2xl mx-auto mt-4"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                API-first architecture, flexible deployment, and transparent pricing designed for long-term partnerships
              </p>
            </motion.div>

            {/* AI Stack - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200/60 bg-white shadow-lg mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1c17ff]/10 border border-[#1c17ff]/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#1c17ff]" />
                </div>
                <h3
                  className="text-xl text-black"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {integrationApproach.stack.title}
                </h3>
              </div>
              
              <p
                className="text-sm text-gray-600 mb-6 leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                {integrationApproach.stack.description}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {integrationApproach.stack.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1c17ff] flex-shrink-0 mt-0.5" />
                    <span
                      className="text-sm text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Deployment Models */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl border border-gray-200/60 bg-white shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#a44f98]/10 border border-[#a44f98]/20 flex items-center justify-center">
                    <Network className="w-6 h-6 text-[#a44f98]" />
                  </div>
                  <h3
                    className="text-xl text-black"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                  >
                    {integrationApproach.deployment.title}
                  </h3>
                </div>
                
                <p
                  className="text-sm text-gray-600 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {integrationApproach.deployment.description}
                </p>
                
                <div className="space-y-3">
                  {integrationApproach.deployment.models.map((model, i) => {
                    const ModelIcon = model.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50/60 rounded-xl border border-gray-200/40 hover:border-gray-300/60 transition-all duration-200">
                        <div 
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${model.color}10` }}
                        >
                          <ModelIcon className="w-4 h-4" style={{ color: model.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="mb-1">
                            <span
                              className="text-sm text-black"
                              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                            >
                              {model.name}
                            </span>
                          </div>
                          <p
                            className="text-xs text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                          >
                            {model.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Business Model */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl border border-gray-200/60 bg-white shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ee7d48]/10 border border-[#ee7d48]/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#ee7d48]" />
                  </div>
                  <h3
                    className="text-xl text-black"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                  >
                    {integrationApproach.businessModel.title}
                  </h3>
                </div>
                
                <p
                  className="text-sm text-gray-600 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {integrationApproach.businessModel.description}
                </p>
                
                <div className="space-y-3">
                  {integrationApproach.businessModel.breakdown.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50/60 rounded-xl border border-gray-200/40">
                        <ItemIcon className="w-4 h-4 text-[#a44f98] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span
                              className="text-lg text-[#a44f98] tabular-nums"
                              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                            >
                              {item.percentage}
                            </span>
                            <span
                              className="text-sm text-black"
                              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                            >
                              {item.type}
                            </span>
                          </div>
                          <p
                            className="text-xs text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl text-black mb-6 leading-[1.1]"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                Let's build the future{' '}
                <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                  of insurance together
                </span>
              </h2>
              <p
                className="text-base text-gray-600 mb-10 leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                Schedule a demo to see how our AI stack can transform your operations.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1c17ff 0%, #a44f98 50%, #f9b336 100%)',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>
    </>
  );
}

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const Icon = solution.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Header Column */}
        <div className="md:col-span-2">
          <div className="mb-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{
                backgroundColor: `${solution.color}10`,
                border: `1px solid ${solution.color}20`,
              }}
            >
              <Icon className="w-7 h-7" style={{ color: solution.color }} />
            </div>
            
            <h3
              className="text-2xl md:text-3xl text-black mb-3 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              {solution.title}
            </h3>
            
            <p
              className="text-sm mb-5"
              style={{ 
                fontFamily: 'Sora, sans-serif', 
                fontWeight: 600,
                color: solution.color 
              }}
            >
              {solution.tagline}
            </p>
            
            <p
              className="text-sm text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              {solution.description}
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3">
            {solution.benefits.map((benefit, i) => (
              <div key={i} className="p-3 bg-white border border-gray-200/60 rounded-xl text-center hover:shadow-sm transition-all duration-300">
                <div
                  className="text-xl mb-1 tabular-nums"
                  style={{ 
                    fontFamily: 'Sora, sans-serif', 
                    fontWeight: 700,
                    color: solution.color,
                  }}
                >
                  {benefit.metric}
                </div>
                <div
                  className="text-[9px] text-gray-600 leading-tight uppercase tracking-wider"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {benefit.label}
                </div>
                <div
                  className="text-[8px] text-gray-500 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {benefit.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Use Cases Column */}
        <div className="md:col-span-3">
          <div className="p-8 rounded-2xl border border-gray-200/60 bg-white shadow-lg h-full">
            <div
              className="text-[10px] uppercase tracking-[0.25em] mb-6 pb-4 border-b border-gray-200/60"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: solution.color }}
            >
              Use Cases & Applications
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {solution.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: solution.color }}
                  />
                  <span
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  >
                    {useCase}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}