import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  FileText, 
  AlertCircle,
  CheckCircle2,
  Clock,
  BarChart3,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const tabs = [
  { id: 'ssa', label: 'SSA Sales Intelligence', icon: TrendingUp },
  { id: 'ucp', label: 'UCP – Underwriter Intelligence', icon: FileText },
];

// SSA Sales Intelligence Data
const ssaMetrics = [
  { label: 'Total de Submissões', value: '2,847', premium: '$47.2M', change: '+12.4%', trend: 'up', color: '#1c17ff', icon: BarChart3 },
  { label: 'Verde (Aprovado)', value: '1,891', premium: '$31.8M', pct: '66%', color: '#10b981', icon: CheckCircle2 },
  { label: 'Amarelo (Revisão)', value: '788', premium: '$13.3M', pct: '28%', color: '#f59e0b', icon: Clock },
  { label: 'Vermelho (Recusado)', value: '168', premium: '$2.1M', pct: '6%', color: '#ef4444', icon: AlertCircle },
];

const topSubmissions = [
  { id: 'SUB-8472', company: 'Global Logistics LLC', product: 'Frota de Veículos', premium: '$847,200', broker: 'Apex Insurance Group', status: 'green' },
  { id: 'SUB-8471', company: 'MedTech Industries', product: 'Resp. Civil do Produto', premium: '$623,500', broker: 'Metropolitan Brokers', status: 'green' },
  { id: 'SUB-8470', company: 'Construction Partners', product: 'Resp. Civil Geral', premium: '$512,800', broker: 'National Risk Partners', status: 'yellow' },
  { id: 'SUB-8469', company: 'Manufacturing Corp', product: 'Comp. Trabalhador', premium: '$487,300', broker: 'Regional Insurance Co', status: 'green' },
  { id: 'SUB-8468', company: 'Tech Innovations Inc', product: 'Resp. Cibernética', premium: '$421,700', broker: 'Apex Insurance Group', status: 'yellow' },
];

const topBrokers = [
  { name: 'Apex Insurance Group', submissions: 342, premium: '$8.4M', conversion: '68%' },
  { name: 'Metropolitan Brokers', submissions: 298, premium: '$7.1M', conversion: '71%' },
  { name: 'National Risk Partners', submissions: 276, premium: '$6.8M', conversion: '64%' },
];

// UCP Underwriter Intelligence Data
const ucpMetrics = [
  { label: 'Quotes Generated', value: '1,727', premium: '$34.4M', change: '+18.2%', trend: 'up', color: '#1c17ff', icon: FileText },
  { label: 'Green (Focus)', value: '1,247', premium: '$24.8M', pct: '72%', color: '#10b981', icon: CheckCircle2 },
  { label: 'Yellow (Attention)', value: '412', premium: '$8.2M', pct: '24%', color: '#f59e0b', icon: Clock },
  { label: 'Avg Decision Time', value: '2.4min', change: '-89%', trend: 'down', color: '#a44f98', icon: Zap },
];

const topQuotes = [
  { id: 'Q-2847', company: 'Global Transport Co', product: 'Fleet Auto', premium: '$847K', risk: 68, status: 'green', underwriter: 'Sarah M.' },
  { id: 'Q-2846', company: 'Healthcare Systems', product: 'Medical Mal.', premium: '$623K', risk: 72, status: 'green', underwriter: 'David L.' },
  { id: 'Q-2845', company: 'Construction LLC', product: 'Gen. Liability', premium: '$512K', risk: 81, status: 'yellow', underwriter: 'Michael R.' },
  { id: 'Q-2844', company: 'Tech Startup Inc', product: 'Cyber', premium: '$487K', risk: 64, status: 'green', underwriter: 'Jennifer K.' },
  { id: 'Q-2843', company: 'Manufacturing Co', product: 'Workers Comp', premium: '$421K', risk: 88, status: 'yellow', underwriter: 'Robert P.' },
];

const underwriterQueue = [
  { underwriter: 'Sarah M.', pending: 23, avgTime: '2.1min', productivity: '142%', workload: 'optimal' },
  { underwriter: 'David L.', pending: 18, avgTime: '2.3min', productivity: '138%', workload: 'optimal' },
  { underwriter: 'Michael R.', pending: 31, avgTime: '3.2min', productivity: '121%', workload: 'high' },
];

export function DashboardSectionEnterprise() {
  const [activeTab, setActiveTab] = useState('ssa');
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,23,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(164,79,152,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-4"
          >
            <Activity size={12} className="text-[#1c17ff]" />
            <span
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Inteligência em Tempo Real
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl mb-4 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] bg-clip-text text-transparent">
              Inteligência que impulsiona decisões
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Dashboards em tempo real para otimizar conversão, crescimento e rentabilidade
          </motion.p>

          {/* Demo Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span
              className="text-xs text-amber-900"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Prévia Demo · Dados de exemplo para ilustração
            </span>
          </motion.div>
        </div>

        {/* Laptop Frame Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 relative"
        >
          {/* Laptop body */}
          <div className="relative mx-auto" style={{ maxWidth: '1400px' }}>
            {/* Screen bezel */}
            <div className="relative rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl flex items-center justify-center z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
              </div>

              {/* Screen content with scrollable dashboard */}
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white" style={{ aspectRatio: '16/10' }}>
                <div className="absolute inset-0 overflow-y-auto">
                  <div className="p-8">
                    {/* Dashboard content */}
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
          {activeTab === 'ssa' && (
            <div className="space-y-6">
              {/* Top KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ssaMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
                      className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${metric.color}10` }}
                        >
                          <Icon size={20} style={{ color: metric.color }} />
                        </div>
                        {metric.change && (
                          <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                            metric.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                          }`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                            {metric.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {metric.change}
                          </div>
                        )}
                      </div>
                      <div 
                        className="text-xs text-gray-500 uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        {metric.label}
                      </div>
                      <div 
                        className="text-3xl mb-1"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: metric.color }}
                      >
                        {metric.value}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="text-sm text-gray-700"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                          {metric.premium}
                        </span>
                        {metric.pct && (
                          <span 
                            className="text-xs text-gray-500"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                          >
                            {metric.pct}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top 5 Submissions */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-gray-200/80">
                  <h3 
                    className="text-sm text-gray-900 mb-5 flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    <Sparkles size={16} className="text-[#1c17ff]" />
                    Top 5 Maiores Submissões por Prêmio
                  </h3>
                  <div className="space-y-3">
                    {topSubmissions.map((sub) => (
                      <div key={sub.id} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                        <div className={`w-3 h-3 rounded-full shrink-0 ${
                          sub.status === 'green' ? 'bg-green-500' : 'bg-amber-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span 
                              className="text-xs text-gray-900"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              {sub.id}
                            </span>
                            <span 
                              className="text-xs text-gray-600 truncate"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                            >
                              {sub.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-gray-500">
                            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{sub.product}</span>
                            <span className="text-gray-400">•</span>
                            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{sub.broker}</span>
                          </div>
                        </div>
                        <div 
                          className="text-base text-gray-900 shrink-0"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {sub.premium}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Brokers */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80">
                  <h3 
                    className="text-sm text-gray-900 mb-5 flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    <TrendingUp size={16} className="text-[#a44f98]" />
                    Top Corretoras
                  </h3>
                  <div className="space-y-3">
                    {topBrokers.map((broker, idx) => (
                      <div key={broker.name} className="p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                          <div 
                            className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1c17ff] to-[#a44f98] flex items-center justify-center text-white text-xs"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {idx + 1}
                          </div>
                          <div 
                            className="text-xs text-gray-900 truncate flex-1"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {broker.name}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Subs
                            </div>
                            <div className="text-sm text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {broker.submissions}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Premium
                            </div>
                            <div className="text-sm text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {broker.premium}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Conv
                            </div>
                            <div className="text-sm text-green-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {broker.conversion}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ucp' && (
            <div className="space-y-6">
              {/* UCP KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ucpMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
                      className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${metric.color}10` }}
                        >
                          <Icon size={20} style={{ color: metric.color }} />
                        </div>
                        {metric.change && (
                          <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                            metric.trend === 'down' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                          }`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                            {metric.trend === 'down' ? <ArrowDownRight size={12} /> : <ArrowUpRight size={12} />}
                            {metric.change}
                          </div>
                        )}
                      </div>
                      <div 
                        className="text-xs text-gray-500 uppercase tracking-wider mb-2"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        {metric.label}
                      </div>
                      <div 
                        className="text-3xl mb-1"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: metric.color }}
                      >
                        {metric.value}
                      </div>
                      {metric.premium && (
                        <div className="flex items-baseline gap-2">
                          <span 
                            className="text-sm text-gray-700"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                          >
                            {metric.premium}
                          </span>
                          {metric.pct && (
                            <span 
                              className="text-xs text-gray-500"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                            >
                              {metric.pct}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Quotes */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-gray-200/80">
                  <h3 
                    className="text-sm text-gray-900 mb-5 flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    <Sparkles size={16} className="text-[#1c17ff]" />
                    Top 5 Quotes – Priority Queue
                  </h3>
                  <div className="space-y-3">
                    {topQuotes.map((quote) => (
                      <div key={quote.id} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                        <div className={`w-3 h-3 rounded-full shrink-0 ${
                          quote.status === 'green' ? 'bg-green-500' : 'bg-amber-500'
                        }`} />
                        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                          <div>
                            <div 
                              className="text-xs text-gray-900 mb-0.5"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                              {quote.id}
                            </div>
                            <div 
                              className="text-[10px] text-gray-600 truncate"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                            >
                              {quote.company}
                            </div>
                          </div>
                          <div 
                            className="text-xs text-gray-700"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                          >
                            {quote.product}
                          </div>
                          <div 
                            className="text-sm text-gray-900"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {quote.premium}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] text-gray-500 uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                Risk
                              </span>
                              <span 
                                className="text-sm px-2 py-0.5 rounded-full"
                                style={{ 
                                  fontFamily: 'Inter, sans-serif', 
                                  fontWeight: 700,
                                  color: quote.risk > 80 ? '#ef4444' : quote.risk > 70 ? '#f59e0b' : '#10b981',
                                  backgroundColor: quote.risk > 80 ? '#fef2f2' : quote.risk > 70 ? '#fffbeb' : '#f0fdf4'
                                }}
                              >
                                {quote.risk}
                              </span>
                            </div>
                            <span 
                              className="text-[10px] text-gray-500"
                              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                            >
                              {quote.underwriter}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Underwriter Workload */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80">
                  <h3 
                    className="text-sm text-gray-900 mb-5 flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    <Users size={16} className="text-[#a44f98]" />
                    Team Workload
                  </h3>
                  <div className="space-y-3">
                    {underwriterQueue.map((uw) => (
                      <div key={uw.underwriter} className="p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <span 
                            className="text-xs text-gray-900"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {uw.underwriter}
                          </span>
                          <span 
                            className={`text-[9px] px-2 py-1 rounded-full uppercase ${
                              uw.workload === 'optimal' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                            }`}
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {uw.workload}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-[10px] text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Pending
                            </div>
                            <div className="text-sm text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {uw.pending}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Avg Time
                            </div>
                            <div className="text-sm text-gray-900" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {uw.avgTime}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-gray-500 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                              Productivity
                            </div>
                            <div className="text-sm text-green-600" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                              {uw.productivity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Screen glare effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Laptop base */}
            <div className="relative h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl" style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-700 rounded-b-md" />
            </div>

            {/* Laptop shadow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-11/12 h-3 bg-black/10 blur-xl rounded-full" />
          </div>
        </motion.div>

        {/* Product Selector - Moved below the laptop frame */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs text-center text-gray-500 mb-4 uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Selecione o Dashboard do Produto
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    data-clickable
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#1c17ff]/5 to-[#a44f98]/5 border-[#1c17ff] shadow-xl'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProduct"
                        className="absolute top-4 right-4"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1c17ff] animate-pulse" />
                      </motion.div>
                    )}

                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'bg-[#1c17ff]/10 shadow-lg' : 'bg-gray-100'
                        }`}
                      >
                        <Icon
                          size={32}
                          className="transition-all duration-300"
                          style={{ color: isActive ? '#1c17ff' : '#6b7280' }}
                        />
                      </div>
                      <div>
                        <div
                          className={`text-xl mb-2 transition-all duration-300 ${
                            isActive ? 'text-gray-900' : 'text-gray-600'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {tab.id.toUpperCase()}
                        </div>
                        <div
                          className={`text-sm transition-all duration-300 ${
                            isActive ? 'text-gray-700' : 'text-gray-500'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {tab.label.replace(/^(SSA|UCP)\s*–?\s*/, '')}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c17ff] via-[#a44f98] to-[#ee7d48] p-12 text-center">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              >
                <Sparkles size={16} className="text-white" />
                <span 
                  className="text-xs text-white tracking-wider uppercase"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Isto é apenas o começo
                </span>
              </motion.div>

              <h3 
                className="text-3xl md:text-4xl text-white mb-4"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Pronto para ver seus{' '}
                <span className="underline decoration-wavy decoration-white/50 underline-offset-4">
                  dados reais
                </span>
                {' '}aqui?
              </h3>
              
              <p 
                className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Os dashboards são adaptados para o seu negócio, analisando as métricas e analytics que poderiam lhe ajudar em tomar melhores decisões e alavancar os sues negócios
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-xl bg-white text-[#1c17ff] hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Fale Conosco
                <span className="ml-2 text-sm opacity-70">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}