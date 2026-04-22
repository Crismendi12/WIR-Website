import { motion } from 'motion/react';
import { 
  FileText, 
  Brain, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Database,
  BarChart3
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    icon: FileText,
    title: 'Data Ingestion',
    subtitle: 'Multi-channel intake',
    description: 'Automated extraction from emails, PDFs, forms, and APIs',
    features: ['OCR processing', 'Field validation', 'Format normalization'],
    color: '#1c17ff',
    status: '<200ms',
  },
  {
    id: 2,
    icon: Brain,
    title: 'AI Analysis',
    subtitle: 'Risk assessment engine',
    description: 'ML models evaluate 300+ risk factors in parallel',
    features: ['Pattern recognition', 'Anomaly detection', 'Predictive scoring'],
    color: '#a44f98',
    status: '~2s avg',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Validation & Compliance',
    subtitle: 'Automated checks',
    description: 'Real-time validation against regulatory requirements',
    features: ['Rule engine', 'Policy compliance', 'Fraud screening'],
    color: '#ee7d48',
    status: '~1s',
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: 'Decision & Quote',
    subtitle: 'Instant output',
    description: 'Automated approval or intelligent routing to underwriters',
    features: ['Dynamic pricing', 'Auto-binding', 'Quote generation'],
    color: '#f9b336',
    status: '<500ms',
  },
];

const integrationPoints = [
  { icon: Database, label: 'Core Systems', count: '20+ integrations' },
  { icon: Zap, label: 'Real-time APIs', count: 'REST & GraphQL' },
  { icon: BarChart3, label: 'Analytics', count: 'Live dashboards' },
];

export function WorkflowAutomation() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-4"
          >
            <Zap size={12} className="text-[#1c17ff]" />
            <span 
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Automated Workflow
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
            Submission to quote in seconds
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Four-stage intelligent pipeline that processes submissions 90% faster than manual workflows
          </motion.p>
        </div>

        {/* Workflow grid - 2x2 for better visual flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-5 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-md transition-all duration-200">
                {/* Step indicator */}
                <div className="absolute top-5 right-5">
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                    style={{ 
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Icon and header */}
                <div className="flex items-start gap-3 mb-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${step.color}10` }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </div>
                  <div className="flex-1 pr-8">
                    <h3 
                      className="text-base text-gray-900 mb-0.5"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-xs text-gray-600"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-sm text-gray-700 mb-3 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {step.description}
                </p>

                {/* Features list */}
                <div className="space-y-1.5 mb-3">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: step.color }} />
                      <span 
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Processing time */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs text-gray-500"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                    >
                      Processing time
                    </span>
                    <span 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Sora, sans-serif', 
                        fontWeight: 700,
                        color: step.color
                      }}
                    >
                      {step.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connection arrow (only for first 3) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Integration points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative p-5 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p 
                className="text-base text-gray-900 mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Plug into your existing infrastructure
              </p>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                No rip-and-replace. Deploy as an intelligent layer on top of your core systems.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {integrationPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <point.icon size={16} className="text-gray-400" />
                  <div>
                    <div 
                      className="text-xs text-gray-900"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                    >
                      {point.label}
                    </div>
                    <div 
                      className="text-[10px] text-gray-500"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                    >
                      {point.count}
                    </div>
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
