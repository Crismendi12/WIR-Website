import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle, Lock, FileCheck, Cpu } from 'lucide-react';

const auditSteps = [
  {
    title: 'Data Ingestion',
    description: 'Secure API intake with real-time validation and encryption',
    time: '00:00.012',
    status: 'VERIFIED',
    code: '{"source": "api/v3", "timestamp": "2026-03-02T14:23:45Z", "encrypted": true, "checksum": "sha256:a4f8..."}',
    icon: FileCheck,
    color: '#1c17ff',
  },
  {
    title: 'AI Processing',
    description: 'Multi-model ensemble analysis with confidence scoring',
    time: '00:00.847',
    status: 'VALIDATED',
    code: '{"model": "wir-uw-v4", "confidence": 0.97, "audit_id": "WIR-2026-0001", "explainability": true}',
    icon: Cpu,
    color: '#f9b336',
  },
  {
    title: 'Compliance Check',
    description: 'Automated regulatory verification across jurisdictions',
    time: '00:01.203',
    status: 'COMPLIANT',
    code: '{"regulations": ["GDPR", "SUSEP", "SOC2", "ISO-27001"], "status": "all_pass", "jurisdiction": "BR"}',
    icon: Lock,
    color: '#ee7d48',
  },
  {
    title: 'Final Verification',
    description: 'Immutable record sealed on distributed ledger',
    time: '00:01.892',
    status: 'SEALED',
    code: '{"hash": "0xA3F8...9B2C", "ledger": "immutable", "signature": "verified", "block": 44821}',
    icon: CheckCircle,
    color: '#a44f98',
  },
];

export function AuditTrail() {
  return (
    <section id="audit" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1c17ff]/10 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-[11px] text-[#1c17ff] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            Audit Trail
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 max-w-3xl mx-auto leading-[1.1]"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Every decision,{' '}
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
              permanently traceable
            </span>
          </h2>
          <p
            className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            No black boxes. Every underwriting decision comes with a complete, cryptographically sealed audit trail.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-[#1c17ff]/25 via-[#ee7d48]/15 to-transparent" />
          </div>

          <div className="space-y-6 md:space-y-8">
            {auditSteps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl shadow-md border border-black/[0.06]"
          >
            <span className="w-2 h-2 rounded-full bg-[#f9b336] shadow-[0_0_8px_#f9b336] animate-pulse" />
            <span className="text-sm text-gray-600" style={{ fontFamily: 'Sora, sans-serif' }}>
              All actions{' '}
              <span className="text-[#f9b336]" style={{ fontWeight: 700 }}>auditable</span>
              {' '}&middot;{' '}Complete transparency and traceability
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }: { step: (typeof auditSteps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [showCode, setShowCode] = useState(false);
  const isLeft = index % 2 === 0;
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-start gap-4 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline node */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center relative shadow-md"
          style={{
            border: '2px solid',
            borderColor: `${step.color}50`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: step.color }} />
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={isInView ? { scale: [1, 1.6], opacity: [0.3, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: index * 0.3 }}
          >
            <div className="w-full h-full rounded-full" style={{ border: `2px solid ${step.color}` }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${
          isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="group bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{
            padding: '1.25rem',
          }}
          data-clickable
          onClick={() => setShowCode(!showCode)}
        >
          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
            <span
              className="text-[10px] tracking-[0.15em] px-2 py-0.5"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: step.color,
                backgroundColor: `${step.color}10`,
                border: `1px solid ${step.color}25`,
              }}
            >
              {step.status}
            </span>
            <span className="text-[10px] text-gray-500 font-mono">{step.time}</span>
          </div>

          <h3
            className="text-lg text-black mb-1"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            {step.title}
          </h3>
          <p className="text-sm text-gray-600" style={{ fontFamily: 'Sora, sans-serif' }}>
            {step.description}
          </p>

          <motion.div
            initial={false}
            animate={{ height: showCode ? 'auto' : 0, opacity: showCode ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <pre
              className="text-[11px] font-mono mt-3 p-3 overflow-x-auto bg-gray-50/80 border border-black/[0.05]"
              style={{
                color: step.color,
              }}
            >
              {step.code}
            </pre>
          </motion.div>

          <div className={`mt-3 flex items-center gap-1 ${isLeft ? 'md:justify-end' : ''}`}>
            <span
              className="text-[10px] text-gray-500 tracking-wider uppercase cursor-pointer hover:text-gray-700 transition-colors"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              {showCode ? 'Hide' : 'View'} audit data
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}