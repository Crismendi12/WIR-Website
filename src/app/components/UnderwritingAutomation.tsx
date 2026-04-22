import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import {
  FileText,
  Brain,
  Shield,
  Calculator,
  GitBranch,
  BarChart3,
  Zap,
  CheckCircle2,
  Clock,
  TrendingUp,
} from 'lucide-react';

const workflowNodes = [
  {
    id: '01',
    title: 'Application Intake',
    subtitle: 'Broker submits via portal or API',
    icon: FileText,
    color: '#3B82F6',
    dashboardData: {
      type: 'document',
      items: [
        { label: 'Quote ID', value: 'BR-2026-44821' },
        { label: 'Insured', value: 'Tech Startup Inc.' },
        { label: 'Limit', value: 'USD 2M' },
        { label: 'Employees', value: '47' },
      ],
    },
  },
  {
    id: '02',
    title: 'AI Document Extraction',
    subtitle: 'OCR + NLP parse all attachments',
    icon: Brain,
    color: '#8B5CF6',
    dashboardData: {
      type: 'analysis',
      items: [
        { label: 'Documents Parsed', value: '12', progress: 100 },
        { label: 'Fields Extracted', value: '247', progress: 100 },
        { label: 'Confidence', value: '99.2%', progress: 99 },
      ],
    },
  },
  {
    id: '03',
    title: 'Business Intelligence Dashboard',
    subtitle: 'Prioritization of brokers and business',
    icon: BarChart3,
    color: '#A855F7',
    dashboardData: {
      type: 'intelligence',
      items: [
        { label: 'Broker Score', value: '94/100', status: 'high' },
        { label: 'Business Priority', value: 'P1', status: 'high' },
        { label: 'Expected Revenue', value: '$45K', status: 'medium' },
        { label: 'Conversion Prob.', value: '82%', status: 'high' },
      ],
    },
  },
  {
    id: '04',
    title: 'Risk Assessment',
    subtitle: 'Analyze loss history, credit, exposure',
    icon: Shield,
    color: '#D946EF',
    dashboardData: {
      type: 'chart',
      riskScore: 18,
      factors: [
        { label: 'Claims History', score: 92, status: 'low' },
        { label: 'Financial Health', score: 88, status: 'low' },
        { label: 'Industry Risk', score: 65, status: 'medium' },
      ],
    },
  },
  {
    id: '05',
    title: 'Pricing Engine',
    subtitle: 'Auto-calculate premium with rating tables',
    icon: Calculator,
    color: '#F97316',
    dashboardData: {
      type: 'pricing',
      baseRate: 2840,
      adjustments: [
        { label: 'Base Premium', value: '+$2,840' },
        { label: 'Risk Adjustment', value: '-$340' },
        { label: 'Volume Discount', value: '-$180' },
      ],
      final: '$2,320',
    },
  },
  {
    id: '06',
    title: 'Dashboard & Prioritization',
    subtitle: 'Business intelligence and quotes prioritization',
    icon: TrendingUp,
    color: '#10B981',
    dashboardData: {
      type: 'prioritization',
      quotes: [
        { id: 'Q-001', priority: 'High', value: '$45K', status: 'Ready' },
        { id: 'Q-002', priority: 'Medium', value: '$28K', status: 'Review' },
        { id: 'Q-003', priority: 'High', value: '$62K', status: 'Ready' },
      ],
    },
  },
];

const stats = [
  { value: '< 1 min', label: 'Average Processing Time' },
  { value: '97.3%', label: 'Straight-Through Rate' },
  { value: 'Zero', label: 'Manual Touchpoints' },
];

export function UnderwritingAutomation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeNode, setActiveNode] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);

  // Auto-run animation when in view
  useEffect(() => {
    if (isInView && !isRunning) {
      setIsRunning(true);
      setActiveNode(-1);
      setCompletedNodes([]);

      const timers = workflowNodes.map((_, index) =>
        setTimeout(() => {
          setActiveNode(index);
          if (index > 0) {
            setCompletedNodes((prev) => [...prev, index - 1]);
          }
        }, index * 700)
      );

      // Mark last node as completed and reset
      const completeTimer = setTimeout(() => {
        setCompletedNodes([...workflowNodes.map((_, i) => i)]);
        setActiveNode(-1);
      }, workflowNodes.length * 700 + 400);

      const resetTimer = setTimeout(() => {
        setIsRunning(false);
      }, workflowNodes.length * 700 + 800);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(completeTimer);
        clearTimeout(resetTimer);
      };
    }
  }, [isInView]);

  // Restart animation
  useEffect(() => {
    if (!isRunning && isInView) {
      const restartTimer = setTimeout(() => {
        setIsRunning(true);
        setActiveNode(-1);
        setCompletedNodes([]);

        const timers = workflowNodes.map((_, index) =>
          setTimeout(() => {
            setActiveNode(index);
            if (index > 0) {
              setCompletedNodes((prev) => [...prev, index - 1]);
            }
          }, index * 700)
        );

        const completeTimer = setTimeout(() => {
          setCompletedNodes([...workflowNodes.map((_, i) => i)]);
          setActiveNode(-1);
        }, workflowNodes.length * 700 + 400);

        const resetTimer = setTimeout(() => {
          setIsRunning(false);
        }, workflowNodes.length * 700 + 800);

        return () => {
          timers.forEach(clearTimeout);
          clearTimeout(completeTimer);
          clearTimeout(resetTimer);
        };
      }, 1200);

      return () => clearTimeout(restartTimer);
    }
  }, [isRunning, isInView]);

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-20 md:py-32 px-6 overflow-hidden bg-white"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-[10px] text-[#F97316] tracking-[0.3em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            LIVE WORKFLOW AUTOMATION
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 leading-[1.1]"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            End to End business Journey in{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F97316] bg-clip-text text-transparent">
              Under 1 minute
            </span>
          </h2>
          <p
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Watch data flow through our AI pipeline in real-time. From intake to binding — fully automated.
          </p>
        </motion.div>

        {/* 3D Workflow Pipeline */}
        <div className="relative mb-20 overflow-x-auto pb-12">
          <div className="inline-flex items-start gap-0 min-w-max px-4">
            {workflowNodes.map((node, index) => (
              <div key={node.id} className="relative flex items-start">
                {/* Workflow Node Card */}
                <WorkflowNode
                  node={node}
                  index={index}
                  isInView={isInView}
                  isActive={activeNode === index}
                  isCompleted={completedNodes.includes(index)}
                />

                {/* Connecting Line with animated flow */}
                {index < workflowNodes.length - 1 && (
                  <div className="relative w-20 h-2 mt-24">
                    {/* Base line */}
                    <div
                      className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 transition-all duration-500"
                      style={{
                        background: completedNodes.includes(index)
                          ? `linear-gradient(to right, ${node.color}, ${workflowNodes[index + 1].color})`
                          : `linear-gradient(to right, #e5e7eb, #e5e7eb)`,
                      }}
                    />

                    {/* Animated flowing data particles */}
                    {activeNode === index && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 rounded-full -translate-y-1/2"
                            style={{
                              width: `${8 - i}px`,
                              height: `${8 - i}px`,
                              backgroundColor: workflowNodes[index + 1].color,
                              boxShadow: `0 0 ${12 - i * 2}px ${
                                workflowNodes[index + 1].color
                              }`,
                            }}
                            initial={{ left: '-10%', opacity: 0 }}
                            animate={{
                              left: '110%',
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 1,
                              ease: 'easeInOut',
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </>
                    )}

                    {/* Arrow head */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 transition-all duration-500"
                      style={{
                        borderLeft: completedNodes.includes(index)
                          ? `8px solid ${workflowNodes[index + 1].color}`
                          : '8px solid #e5e7eb',
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative px-8 md:px-12">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-4xl text-black mb-2 tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-gray-500 tracking-wide"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowNode({
  node,
  index,
  isInView,
  isActive,
  isCompleted,
}: {
  node: (typeof workflowNodes)[0];
  index: number;
  isInView: boolean;
  isActive: boolean;
  isCompleted: boolean;
}) {
  const Icon = node.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="relative w-[280px]"
    >
      {/* Node Card */}
      <div
        className="relative bg-white border-2 overflow-hidden transition-all duration-300 shadow-lg"
        style={{
          borderColor: isActive
            ? node.color
            : isCompleted
            ? `${node.color}60`
            : '#e5e7eb',
          borderRadius: '16px',
          boxShadow: isActive
            ? `0 20px 40px ${node.color}25, 0 0 0 4px ${node.color}10`
            : isCompleted
            ? `0 8px 24px rgba(0,0,0,0.08)`
            : '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        {/* Top colored bar */}
        <div
          className="h-1.5"
          style={{
            background: isActive || isCompleted ? node.color : '#e5e7eb',
          }}
        />

        {/* Header */}
        <div className="p-5 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isActive
                  ? `${node.color}20`
                  : isCompleted
                  ? `${node.color}10`
                  : '#f9fafb',
                border: `2px solid ${
                  isActive || isCompleted ? `${node.color}40` : '#e5e7eb'
                }`,
              }}
            >
              <Icon
                className="w-6 h-6 transition-all duration-300"
                style={{
                  color: isActive || isCompleted ? node.color : '#9ca3af',
                }}
              />
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              {isActive && (
                <motion.div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: `${node.color}15`,
                    color: node.color,
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                  }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Clock className="w-3 h-3" />
                  Processing
                </motion.div>
              )}
              {isCompleted && !isActive && (
                <motion.div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  Done
                </motion.div>
              )}
              {!isActive && !isCompleted && (
                <div
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-400"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {node.id}
                </div>
              )}
            </div>
          </div>

          <h3
            className="text-sm text-black mb-1 leading-tight"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
            }}
          >
            {node.title}
          </h3>
          <p
            className="text-xs text-gray-500 leading-relaxed"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 400,
            }}
          >
            {node.subtitle}
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="p-5 min-h-[200px]">
          <AnimatePresence mode="wait">
            {!isActive && !isCompleted && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-[180px] text-gray-300"
              >
                <Zap className="w-8 h-8" />
              </motion.div>
            )}

            {(isActive || isCompleted) && (
              <motion.div
                key="active"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <DashboardContent node={node} isActive={isActive} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function DashboardContent({
  node,
  isActive,
}: {
  node: (typeof workflowNodes)[0];
  isActive: boolean;
}) {
  const data = node.dashboardData;

  if (data.type === 'document') {
    return (
      <div className="space-y-2">
        {data.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg"
          >
            <span
              className="text-xs text-gray-500"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              {item.label}
            </span>
            <span
              className="text-xs text-black"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (data.type === 'analysis') {
    return (
      <div className="space-y-3">
        {data.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="text-xs text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                {item.label}
              </span>
              <span
                className="text-sm text-black tabular-nums"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                {item.value}
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: node.color }}
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (data.type === 'intelligence') {
    return (
      <div className="space-y-2">
        {data.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center p-2.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
          >
            <span
              className="text-xs text-gray-700"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              {item.label}
            </span>
            <span
              className="text-sm text-purple-700 tabular-nums"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (data.type === 'chart') {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div>
            <div
              className="text-xs text-gray-600 mb-1"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              Risk Score
            </div>
            <div
              className="text-2xl text-green-600 tabular-nums"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              {data.riskScore}
              <span className="text-sm text-gray-500">/100</span>
            </div>
          </div>
          <TrendingUp className="w-8 h-8 text-green-500" />
        </div>
        <div className="space-y-2">
          {data.factors.map((factor, i) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between"
            >
              <span
                className="text-xs text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                {factor.label}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${factor.score}%` }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  />
                </div>
                <span
                  className="text-xs text-gray-400 tabular-nums w-8 text-right"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {factor.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (data.type === 'pricing') {
    return (
      <div className="space-y-3">
        {data.adjustments.map((adj, i) => (
          <motion.div
            key={adj.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
          >
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              {adj.label}
            </span>
            <span
              className="text-sm text-gray-800 tabular-nums"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              {adj.value}
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200"
        >
          <div
            className="text-xs text-gray-600 mb-1"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
          >
            Final Premium
          </div>
          <div
            className="text-2xl text-orange-600 tabular-nums"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            {data.final}
          </div>
        </motion.div>
      </div>
    );
  }

  if (data.type === 'prioritization') {
    return (
      <div className="space-y-2">
        <div
          className="text-xs text-gray-500 mb-2 uppercase tracking-wide"
          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
        >
          Active Quotes
        </div>
        {data.quotes.map((quote, i) => (
          <motion.div
            key={quote.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-2.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
          >
            <div>
              <span
                className="text-xs text-gray-700 block"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                {quote.id}
              </span>
              <span
                className="text-[10px] text-green-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                {quote.priority} • {quote.value}
              </span>
            </div>
            <span
              className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              {quote.status}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}