import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Play, Zap, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

const demoStages = [
  {
    stage: 1,
    title: 'Data Ingestion',
    time: '0.012s',
    status: 'processing',
    data: {
      policy_id: 'BR-2026-44821',
      applicant: 'Tech Startup Inc.',
      risk_class: 'D&O Insurance',
      coverage: 'USD 2,000,000',
      employees: 47,
      sector: 'fintech',
      revenue: 'USD 8.5M',
    },
  },
  {
    stage: 2,
    title: 'AI Analysis',
    time: '0.847s',
    status: 'analyzing',
    insights: [
      'Clean claims history detected',
      'Financial position: Strong',
      'Sector risk profile: Acceptable',
      'Multi-model ensemble: 6/7 approve',
    ],
  },
  {
    stage: 3,
    title: 'Compliance Check',
    time: '1.203s',
    status: 'verifying',
    checks: [
      { framework: 'GDPR', status: 'PASS' },
      { framework: 'SUSEP', status: 'PASS' },
      { framework: 'SOC2', status: 'PASS' },
      { framework: 'ISO-27001', status: 'PASS' },
    ],
  },
  {
    stage: 4,
    title: 'Decision',
    time: '1.892s',
    status: 'complete',
    result: {
      decision: 'APPROVED',
      risk_score: 0.18,
      premium: 'R$ 34,800/year',
      confidence: '98.4%',
    },
  },
];

export function GlassBox() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [currentStage, setCurrentStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const startDemo = () => {
    setIsRunning(true);
    setHasRun(true);
    setCurrentStage(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timers = [
      setTimeout(() => setCurrentStage(1), 800),
      setTimeout(() => setCurrentStage(2), 1800),
      setTimeout(() => setCurrentStage(3), 2800),
      setTimeout(() => {
        setCurrentStage(4);
        setIsRunning(false);
      }, 3800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isRunning]);

  return (
    <section
      ref={ref}
      id="demo"
      className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1c17ff]/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(28,23,255,0.03),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="text-[11px] text-[#ee7d48] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            Live Demo
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 max-w-3xl mx-auto leading-[1.1]"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Watch AI decide in{' '}
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
              under 2 seconds
            </span>
          </h2>
          <p
            className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            From raw data to instant approval. The future of underwriting.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Demo Box */}
          <div
            className="relative bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden border border-black/[0.08]"
            style={{
              boxShadow: '0 25px 70px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)',
            }}
          >
            {/* Terminal header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/90" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                  <div className="w-3 h-3 rounded-full bg-green-500/90" />
                </div>
                <span
                  className="text-xs text-gray-400 tracking-wider"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  WIR_INTELLIGENCE_ENGINE v4.2
                </span>
              </div>

              {/* Play button */}
              {!isRunning && (
                <button
                  onClick={startDemo}
                  data-clickable
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1c17ff] to-[#a44f98] text-white text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  <Play size={14} />
                  {hasRun ? 'Run Again' : 'Run Demo'}
                </button>
              )}

              {isRunning && (
                <div className="flex items-center gap-2 text-[#f9b336] text-xs">
                  <Loader2 size={14} className="animate-spin" />
                  <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    PROCESSING...
                  </span>
                </div>
              )}
            </div>

            {/* Progress bar */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isRunning ? (currentStage + 1) / 4 : hasRun ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Demo Content */}
            <div className="p-8 md:p-10 min-h-[500px]">
              <AnimatePresence mode="wait">
                {!hasRun && (
                  <motion.div
                    key="initial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-[400px] text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1c17ff]/10 to-[#f9b336]/10 flex items-center justify-center mb-6 border border-black/[0.04]">
                      <Zap className="w-10 h-10 text-[#1c17ff]" />
                    </div>
                    <h3
                      className="text-2xl text-black mb-3"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                    >
                      Ready to see magic?
                    </h3>
                    <p
                      className="text-sm text-gray-600 max-w-md mb-8"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      Click "Run Demo" to watch our AI layer process a full underwriting decision in real-time.
                    </p>
                  </motion.div>
                )}

                {hasRun && currentStage >= 0 && (
                  <motion.div
                    key="stages"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {demoStages.slice(0, currentStage + 1).map((stage, index) => (
                      <StageCard
                        key={stage.stage}
                        stage={stage}
                        isActive={index === currentStage && isRunning}
                        delay={index * 0.1}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Below */}
          {hasRun && !isRunning && currentStage === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-8"
            >
              <button
                data-clickable
                className="inline-flex items-center gap-2 px-8 py-4 text-sm bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Try With Your Own Data
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function StageCard({
  stage,
  isActive,
  delay,
}: {
  stage: (typeof demoStages)[0];
  isActive: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div
        className={`p-6 border transition-all duration-300 ${
          isActive
            ? 'border-[#1c17ff]/30 bg-gradient-to-br from-[#1c17ff]/5 to-transparent shadow-md'
            : 'border-black/[0.06] bg-white/50'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {stage.status === 'complete' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <motion.div
                animate={isActive ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Loader2 className="w-5 h-5 text-[#1c17ff]" />
              </motion.div>
            )}
            <h4
              className="text-lg text-black"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              {stage.title}
            </h4>
          </div>
          <span
            className="text-xs text-gray-500 font-mono"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {stage.time}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {stage.data && (
            <div className="grid grid-cols-2 gap-3 text-xs">
              {Object.entries(stage.data).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: delay + 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="text-black" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {stage.insights && (
            <div className="space-y-2">
              {stage.insights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: delay + i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-gray-700"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1c17ff]" />
                  {insight}
                </motion.div>
              ))}
            </div>
          )}

          {stage.checks && (
            <div className="grid grid-cols-2 gap-2">
              {stage.checks.map((check, i) => (
                <motion.div
                  key={check.framework}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: delay + i * 0.05 }}
                  className="flex items-center justify-between p-2 bg-green-50/50 border border-green-200/50"
                >
                  <span className="text-xs text-gray-700" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                    {check.framework}
                  </span>
                  <span className="text-xs text-green-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                    ✓ {check.status}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {stage.result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delay }}
              className="p-4 bg-gradient-to-br from-green-50 to-emerald-50/50 border border-green-200/50"
            >
              <div className="text-center mb-3">
                <div
                  className="text-3xl text-green-600 mb-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                >
                  ✓ {stage.result.decision}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="text-center">
                  <div className="text-gray-500 uppercase mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                    Risk Score
                  </div>
                  <div className="text-black" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                    {stage.result.risk_score}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 uppercase mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                    Premium
                  </div>
                  <div className="text-black" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                    {stage.result.premium}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 uppercase mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                    Confidence
                  </div>
                  <div className="text-black" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                    {stage.result.confidence}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}