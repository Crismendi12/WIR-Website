import { motion } from 'motion/react';
import { Zap, Shield, Brain, Network, ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    code: 'SSA',
    name: 'Smart Sales Automation',
    icon: Zap,
    tagline: 'Intelligent lead qualification and distribution',
    description: 'AI-powered pipeline that scores, routes, and converts leads automatically',
    features: [
      'Real-time lead scoring with ML models',
      'Automated workflow routing',
      'Predictive conversion analytics',
    ],
    impact: [
      { metric: '10x', label: 'Faster response' },
      { metric: '99%', label: 'Qualified leads' },
      { metric: '+47%', label: 'Conversion' },
    ],
    color: '#1c17ff',
  },
  {
    code: 'UCP',
    name: 'Underwriter Co-Pilot',
    icon: Shield,
    tagline: 'Instant risk assessment and quote generation',
    description: 'AI assistant that handles data extraction, validation, and preliminary analysis',
    features: [
      'Automated document processing',
      'Risk scoring engine with 300+ factors',
      'Regulatory compliance checks',
    ],
    impact: [
      { metric: '90%', label: 'Time saved' },
      { metric: '<5min', label: 'Quote time' },
      { metric: '97%', label: 'Accuracy' },
    ],
    color: '#a44f98',
  },
  {
    code: 'FDS',
    name: 'Fraud Detection System',
    icon: Brain,
    tagline: 'Neural network-powered fraud prevention',
    description: 'Continuous monitoring that identifies anomalies and patterns invisible to rule-based systems',
    features: [
      'Behavioral pattern recognition',
      'Cross-reference validation',
      'Real-time alert generation',
    ],
    impact: [
      { metric: '85%', label: 'Fraud caught' },
      { metric: '$4.2M', label: 'Saved/year' },
      { metric: '0.1%', label: 'False positive' },
    ],
    color: '#ee7d48',
  },
  {
    code: 'RIN',
    name: 'Risk Intelligence Network',
    icon: Network,
    tagline: 'Global data intelligence across markets',
    description: 'Real-time risk assessment using aggregated data from 47 markets worldwide',
    features: [
      'Multi-market data aggregation',
      'Predictive risk modeling',
      'Dynamic pricing optimization',
    ],
    impact: [
      { metric: '47', label: 'Markets' },
      { metric: '1.2B', label: 'Data points' },
      { metric: 'Real-time', label: 'Updates' },
    ],
    color: '#f9b336',
  },
];

const summaryStats = [
  { value: '90%', label: 'Faster processing', sublabel: 'vs. manual workflows' },
  { value: '97%', label: 'Straight-through rate', sublabel: 'automated decisions' },
  { value: '$18M', label: 'Average annual savings', sublabel: 'per enterprise client' },
  { value: '<30 days', label: 'Time to deployment', sublabel: 'full integration' },
];

export function ProductsGrid() {
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
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Product Suite
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl mb-3 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            End-to-end AI automation
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Modular AI products that work independently or as a unified platform
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {summaryStats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div 
                  className="text-2xl md:text-3xl mb-1 bg-gradient-to-r from-[#1c17ff] to-[#ee7d48] bg-clip-text text-transparent"
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
        </motion.div>
      </div>
    </section>
  );
}
