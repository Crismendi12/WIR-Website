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
  PieChart,
  Activity
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Portfolio Overview', icon: BarChart3 },
  { id: 'underwriting', label: 'Underwriting', icon: FileText },
  { id: 'risk', label: 'Risk Analytics', icon: AlertCircle },
];

const overviewMetrics = [
  { 
    label: 'Total Premium', 
    value: '$47.2M', 
    change: '+12.4%', 
    trend: 'up',
    icon: DollarSign,
    color: '#1c17ff'
  },
  { 
    label: 'Active Policies', 
    value: '8,347', 
    change: '+6.8%', 
    trend: 'up',
    icon: Users,
    color: '#a44f98'
  },
  { 
    label: 'Loss Ratio', 
    value: '64.2%', 
    change: '-3.1%', 
    trend: 'down',
    icon: TrendingDown,
    color: '#ee7d48'
  },
  { 
    label: 'Avg Processing', 
    value: '2.4min', 
    change: '-89%', 
    trend: 'down',
    icon: Clock,
    color: '#f9b336'
  },
];

const underwritingData = [
  { month: 'Jan', approved: 324, pending: 12, rejected: 8 },
  { month: 'Feb', approved: 387, pending: 15, rejected: 11 },
  { month: 'Mar', approved: 442, pending: 9, rejected: 7 },
  { month: 'Apr', approved: 521, pending: 18, rejected: 13 },
  { month: 'May', approved: 598, pending: 11, rejected: 9 },
  { month: 'Jun', approved: 634, pending: 14, rejected: 6 },
];

const riskDistribution = [
  { category: 'Low Risk', percentage: 42, count: 3518, color: '#10b981' },
  { category: 'Medium Risk', percentage: 35, count: 2921, color: '#f59e0b' },
  { category: 'High Risk', percentage: 18, count: 1502, color: '#ef4444' },
  { category: 'Under Review', percentage: 5, count: 406, color: '#6b7280' },
];

const recentSubmissions = [
  { id: 'SUB-8472', type: 'Commercial Auto', status: 'approved', time: '2m ago', premium: '$12,400' },
  { id: 'SUB-8471', type: 'Property', status: 'approved', time: '4m ago', premium: '$8,750' },
  { id: 'SUB-8470', type: 'Liability', status: 'review', time: '7m ago', premium: '$24,300' },
  { id: 'SUB-8469', type: 'Workers Comp', status: 'approved', time: '12m ago', premium: '$15,600' },
];

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
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
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Real-time Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl mb-2 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Operational analytics that matter
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto mb-6"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Live dashboards with actionable insights across your entire portfolio
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 mb-6 border-b border-gray-200"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-clickable
              className={`flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-[#1c17ff] text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Dashboard content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* KPI cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {overviewMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div 
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${metric.color}10` }}
                      >
                        <metric.icon size={16} style={{ color: metric.color }} />
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                        {metric.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {metric.change}
                      </div>
                    </div>
                    <div 
                      className="text-2xl mb-0.5"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div 
                      className="text-xs text-gray-600"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart and list grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Underwriting volume chart */}
                <div className="md:col-span-2 p-5 rounded-xl bg-white border border-gray-200/80">
                  <div className="flex items-center justify-between mb-4">
                    <h3 
                      className="text-sm text-gray-900"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                    >
                      Monthly Submissions
                    </h3>
                    <span className="text-xs text-gray-500" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                      Last 6 months
                    </span>
                  </div>
                  <div className="space-y-3">
                    {underwritingData.map((data, idx) => (
                      <div key={data.month} className="flex items-center gap-3">
                        <div 
                          className="text-xs text-gray-600 w-8"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                        >
                          {data.month}
                        </div>
                        <div className="flex-1 flex items-center gap-1">
                          <div 
                            className="h-7 rounded-md bg-gradient-to-r from-[#1c17ff] to-[#a44f98] flex items-center justify-end pr-2 transition-all"
                            style={{ width: `${(data.approved / 700) * 100}%` }}
                          >
                            <span className="text-[10px] text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                              {data.approved}
                            </span>
                          </div>
                          <div 
                            className="h-7 rounded-md bg-amber-400 flex items-center justify-center px-2"
                            style={{ width: `${(data.pending / 700) * 100}%`, minWidth: '30px' }}
                          >
                            <span className="text-[10px] text-amber-900" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                              {data.pending}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-[#1c17ff] to-[#a44f98]" />
                      <span className="text-xs text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Approved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-amber-400" />
                      <span className="text-xs text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Pending
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="p-5 rounded-xl bg-white border border-gray-200/80">
                  <h3 
                    className="text-sm text-gray-900 mb-4"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    Recent Submissions
                  </h3>
                  <div className="space-y-3">
                    {recentSubmissions.map((submission) => (
                      <div key={submission.id} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-1">
                          <div 
                            className="text-xs text-gray-900"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {submission.id}
                          </div>
                          <div className={`flex items-center gap-1 ${
                            submission.status === 'approved' ? 'text-green-600' : 'text-amber-600'
                          }`}>
                            {submission.status === 'approved' ? (
                              <CheckCircle2 size={12} />
                            ) : (
                              <Clock size={12} />
                            )}
                          </div>
                        </div>
                        <div 
                          className="text-[11px] text-gray-600 mb-1"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                        >
                          {submission.type}
                        </div>
                        <div className="flex items-center justify-between">
                          <span 
                            className="text-[10px] text-gray-500"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                          >
                            {submission.time}
                          </span>
                          <span 
                            className="text-xs text-gray-900"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {submission.premium}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'underwriting' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-gray-200/80">
                <h3 className="text-sm text-gray-900 mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  Approval Rate Trend
                </h3>
                <div className="text-4xl mb-2 bg-gradient-to-r from-[#1c17ff] to-[#a44f98] bg-clip-text text-transparent" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                  94.3%
                </div>
                <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}>
                  Straight-through processing rate
                </p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[94.3%] bg-gradient-to-r from-[#1c17ff] to-[#a44f98] rounded-full" />
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200/80">
                <h3 className="text-sm text-gray-900 mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  Average Decision Time
                </h3>
                <div className="text-4xl mb-2 text-[#1c17ff]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                  2.4min
                </div>
                <p className="text-sm text-green-600 mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  ↓ 89% vs. manual process
                </p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}>
                  Industry avg: 23 minutes
                </p>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="p-6 rounded-xl bg-white border border-gray-200/80">
              <h3 className="text-sm text-gray-900 mb-5" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                Portfolio Risk Distribution
              </h3>
              <div className="space-y-4">
                {riskDistribution.map((risk) => (
                  <div key={risk.category}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: risk.color }} />
                        <span className="text-sm text-gray-900" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                          {risk.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                          {risk.count.toLocaleString()} policies
                        </span>
                        <span className="text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: risk.color }}>
                          {risk.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${risk.percentage}%`, backgroundColor: risk.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
