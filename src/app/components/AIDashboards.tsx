import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from 'lucide-react';

const dashboards = [
  {
    id: 'revenue',
    title: 'Revenue Optimization',
    subtitle: 'Real-time profit tracking & forecasting',
    icon: DollarSign,
    color: '#1c17ff', // Electric Indigo
    metrics: [
      { label: 'Monthly Revenue', value: 'R$ 2.4M', change: '+23%', trend: 'up' },
      { label: 'Profit Margin', value: '34.2%', change: '+5.1%', trend: 'up' },
      { label: 'Customer LTV', value: 'R$ 45.8K', change: '+12%', trend: 'up' },
    ],
    chartData: [65, 72, 68, 78, 85, 92, 88, 95, 102, 110, 118, 125],
  },
  {
    id: 'risk',
    title: 'Risk Portfolio Analytics',
    subtitle: 'AI-powered risk distribution & exposure',
    icon: PieChart,
    color: '#a44f98', // Royal Purple
    metrics: [
      { label: 'Low Risk', value: '64%', change: '+8%', trend: 'up' },
      { label: 'Medium Risk', value: '28%', change: '-3%', trend: 'down' },
      { label: 'High Risk', value: '8%', change: '-5%', trend: 'down' },
    ],
    distribution: [
      { label: 'Low', value: 64, color: '#1c17ff' },
      { label: 'Medium', value: 28, color: '#ee7d48' },
      { label: 'High', value: 8, color: '#6b7280' },
    ],
  },
  {
    id: 'performance',
    title: 'Underwriting Performance',
    subtitle: 'Track efficiency & approval rates',
    icon: Target,
    color: '#ee7d48', // Warm Orange
    metrics: [
      { label: 'Approval Rate', value: '87.3%', change: '+4.2%', trend: 'up' },
      { label: 'Avg. Processing', value: '42s', change: '-18s', trend: 'up' },
      { label: 'STP Rate', value: '94.1%', change: '+6.8%', trend: 'up' },
    ],
    performanceData: [
      { month: 'Jan', value: 78 },
      { month: 'Feb', value: 82 },
      { month: 'Mar', value: 85 },
      { month: 'Apr', value: 87 },
    ],
  },
];

export function AIDashboards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0].id);

  const activeDashboard = dashboards.find((d) => d.id === selectedDashboard) || dashboards[0];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-6 overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,23,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(164,79,152,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#ee7d48]" />
            <span
              className="text-[11px] text-[#ee7d48] tracking-[0.35em] uppercase"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Business Intelligence
            </span>
            <Sparkles className="w-4 h-4 text-[#ee7d48]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Powerful AI Dashboards{' '}
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] bg-clip-text text-transparent">
              Built to Maximize Revenues, Growth and profitability
            </span>
          </h2>
          <p
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Real-time insights that transform data into revenue. Make smarter decisions with AI-powered analytics.
          </p>
        </motion.div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            const isActive = selectedDashboard === dashboard.id;
            return (
              <motion.button
                key={dashboard.id}
                onClick={() => setSelectedDashboard(dashboard.id)}
                data-clickable
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative px-6 py-3 rounded-xl transition-all duration-300 group"
                style={{
                  backgroundColor: isActive ? `${dashboard.color}10` : '#fff',
                  border: `2px solid ${isActive ? dashboard.color : '#e5e7eb'}`,
                  boxShadow: isActive
                    ? `0 8px 24px ${dashboard.color}15, 0 0 0 1px ${dashboard.color}10`
                    : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={isActive ? {
                      rotate: [0, 5, -5, 0],
                    } : {}}
                    transition={{
                      duration: 0.5,
                      repeat: isActive ? Infinity : 0,
                      repeatDelay: 3,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-all duration-300"
                      style={{
                        color: isActive ? dashboard.color : '#9ca3af',
                      }}
                    />
                  </motion.div>
                  <span
                    className="text-sm transition-all duration-300"
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 600,
                      color: isActive ? dashboard.color : '#6b7280',
                    }}
                  >
                    {dashboard.title}
                  </span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: dashboard.color }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dashboard Display */}
        <motion.div
          key={selectedDashboard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <motion.div
            className="bg-white rounded-3xl overflow-hidden border-2 shadow-2xl"
            style={{
              borderColor: `${activeDashboard.color}20`,
              boxShadow: `0 25px 60px ${activeDashboard.color}10`,
            }}
            whileHover={{
              boxShadow: `0 30px 70px ${activeDashboard.color}15`,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div
              className="px-8 py-6 border-b-2 relative overflow-hidden"
              style={{
                borderColor: `${activeDashboard.color}15`,
                background: `linear-gradient(to right, ${activeDashboard.color}05, transparent)`,
              }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent, ${activeDashboard.color}20, transparent)`,
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3
                    className="text-2xl text-black mb-1"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                  >
                    {activeDashboard.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  >
                    {activeDashboard.subtitle}
                  </p>
                </div>
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${activeDashboard.color}15`,
                    border: `2px solid ${activeDashboard.color}30`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {(() => {
                    const Icon = activeDashboard.icon;
                    return <Icon className="w-7 h-7" style={{ color: activeDashboard.color }} />;
                  })()}
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {activeDashboard.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -4,
                      boxShadow: `0 12px 24px ${activeDashboard.color}15`,
                    }}
                    className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 cursor-pointer group"
                    style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at top right, ${activeDashboard.color}10, transparent)`,
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <span
                          className="text-xs text-gray-500 uppercase tracking-wide"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                        >
                          {metric.label}
                        </span>
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor:
                              metric.trend === 'up' ? `${activeDashboard.color}10` : '#6b728010',
                            color: metric.trend === 'up' ? activeDashboard.color : '#6b7280',
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 700,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {metric.trend === 'up' ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          {metric.change}
                        </motion.div>
                      </div>
                      <motion.div
                        className="text-3xl md:text-4xl text-black tabular-nums"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      >
                        {metric.value}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visualization Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden"
              >
                {/* Subtle animated background */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: activeDashboard.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative z-10">
                  {activeDashboard.id === 'revenue' && (
                    <RevenueChart data={activeDashboard.chartData} color={activeDashboard.color} />
                  )}
                  {activeDashboard.id === 'risk' && (
                    <RiskDistribution
                      data={activeDashboard.distribution || []}
                      color={activeDashboard.color}
                    />
                  )}
                  {activeDashboard.id === 'performance' && (
                    <PerformanceChart
                      data={activeDashboard.performanceData || []}
                      color={activeDashboard.color}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#1c17ff]/5 to-[#1c17ff]/10 rounded-2xl p-6 border-2 border-[#1c17ff]/20 relative overflow-hidden group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 24px rgba(28,23,255,0.15)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#1c17ff]/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-6 h-6 text-[#1c17ff]" />
                  </motion.div>
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    Revenue Impact
                  </span>
                </div>
                <motion.div
                  className="text-3xl text-[#1c17ff] tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +R$ 12.4M
                </motion.div>
                <p
                  className="text-xs text-gray-600 mt-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  Increased revenue this quarter
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#a44f98]/5 to-[#a44f98]/10 rounded-2xl p-6 border-2 border-[#a44f98]/20 relative overflow-hidden group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 24px rgba(164,79,152,0.15)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#a44f98]/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-6 h-6 text-[#a44f98]" />
                  </motion.div>
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    Time Saved
                  </span>
                </div>
                <motion.div
                  className="text-3xl text-[#a44f98] tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  2,840 hrs
                </motion.div>
                <p
                  className="text-xs text-gray-600 mt-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  Automated manual work monthly
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#ee7d48]/5 to-[#ee7d48]/10 rounded-2xl p-6 border-2 border-[#ee7d48]/20 relative overflow-hidden group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 12px 24px rgba(238,125,72,0.15)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#ee7d48]/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BarChart3 className="w-6 h-6 text-[#ee7d48]" />
                  </motion.div>
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    Efficiency Gain
                  </span>
                </div>
                <motion.div
                  className="text-3xl text-[#ee7d48] tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  +284%
                </motion.div>
                <p
                  className="text-xs text-gray-600 mt-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  Faster underwriting decisions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RevenueChart({ data, color }: { data: number[]; color: string }) {
  const maxValue = Math.max(...data);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <h4
        className="text-lg text-black mb-6"
        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
      >
        Revenue Growth Trend (12 Months)
      </h4>
      <div className="flex items-end justify-between gap-2 h-64">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-2 h-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full flex-1 flex items-end">
              <motion.div
                className="w-full rounded-t-lg relative group cursor-pointer"
                style={{
                  background: hoveredIndex === index 
                    ? `linear-gradient(to top, ${color}, ${color}aa)`
                    : `linear-gradient(to top, ${color}, ${color}cc)`,
                  boxShadow: hoveredIndex === index 
                    ? `0 -4px 20px ${color}40`
                    : 'none',
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(value / maxValue) * 100}%` }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.05, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ 
                  scale: 1.05,
                }}
              >
                <motion.div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 5,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {value}%
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0"
                    style={{
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderTop: '4px solid black',
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
            <motion.span
              className="text-xs text-gray-500"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              animate={{
                color: hoveredIndex === index ? color : '#6b7280',
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
            >
              {months[index]}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskDistribution({
  data,
  color,
}: {
  data: Array<{ label: string; value: number; color: string }>;
  color: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <h4
        className="text-lg text-black mb-6"
        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
      >
        Risk Portfolio Distribution
      </h4>
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    scale: hoveredIndex === index ? 1.3 : 1,
                    rotate: hoveredIndex === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span
                  className="text-sm text-gray-700"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {item.label} Risk
                </span>
              </div>
              <motion.span
                className="text-lg text-black tabular-nums"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
              >
                {item.value}%
              </motion.span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full rounded-full relative"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{
                      x: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                    }}
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PerformanceChart({
  data,
  color,
}: {
  data: Array<{ month: string; value: number }>;
  color: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <h4
        className="text-lg text-black mb-6"
        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
      >
        Approval Rate Improvement
      </h4>
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.month}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.span
              className="text-sm text-gray-600 w-12"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              animate={{
                color: hoveredIndex === index ? color : '#6b7280',
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
            >
              {item.month}
            </motion.span>
            <div className="flex-1 h-12 bg-gray-200 rounded-xl overflow-hidden relative">
              <motion.div
                className="h-full rounded-xl flex items-center justify-end pr-4 relative"
                style={{
                  background: `linear-gradient(to right, ${color}dd, ${color})`,
                  boxShadow: hoveredIndex === index 
                    ? `0 0 20px ${color}40`
                    : 'none',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Shimmer effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}
                <span
                  className="text-white text-sm tabular-nums relative z-10"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {item.value}%
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ClaimsAlerts({
  data,
  color,
}: {
  data: Array<{ type: string; count: number; severity: string }>;
  color: string;
}) {
  const severityColors = {
    high: '#6b7280',
    medium: '#ee7d48',
    low: '#1c17ff',
  };

  return (
    <div>
      <h4
        className="text-lg text-black mb-6"
        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
      >
        Active Alerts & Prevention
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((alert, index) => (
          <motion.div
            key={alert.type}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -4,
            }}
            className="p-5 rounded-xl border-2 cursor-pointer relative overflow-hidden"
            style={{
              backgroundColor: `${severityColors[alert.severity as keyof typeof severityColors]}08`,
              borderColor: `${severityColors[alert.severity as keyof typeof severityColors]}20`,
            }}
          >
            {/* Pulse effect for high severity */}
            {alert.severity === 'high' && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  border: `2px solid ${severityColors.high}`,
                }}
                animate={{
                  opacity: [0.5, 0, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            <motion.div
              className="text-3xl tabular-nums mb-2"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                color: severityColors[alert.severity as keyof typeof severityColors],
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            >
              {alert.count}
            </motion.div>
            <div
              className="text-sm text-gray-700 mb-3"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              {alert.type}
            </div>
            <div
              className="inline-block px-2 py-1 rounded-full text-xs"
              style={{
                backgroundColor: `${severityColors[alert.severity as keyof typeof severityColors]}15`,
                color: severityColors[alert.severity as keyof typeof severityColors],
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
              }}
            >
              {alert.severity.toUpperCase()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
