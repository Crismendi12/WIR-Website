import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Zap, Shield, Network, Rocket, Globe2 } from 'lucide-react';

const products = [
  {
    code: 'SSA',
    title: 'Smart Sales Automation',
    icon: Zap,
    subtitle: 'Sales & intelligence distribution',
    problem: 'Manual lead emails qualification without data analytics and priorization',
    opportunity: 'AI layer with a distribution intelligence, workflow and business insights',
    impact: [
      { metric: '10x Faster', label: 'response in seconds' },
      { metric: '99% more', label: 'qualified business' },
      { metric: '+ % Higher', label: 'Conversion' },
    ],
    color: '#1c17ff',
  },
  {
    code: 'UCP',
    title: 'Underwriter Co-Pilot',
    icon: Shield,
    subtitle: 'Sales & intelligence distribution',
    problem: '+ 40% losing time on manual and non business tasks',
    opportunity: 'Allow underwriters to analyses risks and focus on business',
    impact: [
      { metric: 'Dashboard', label: 'KPIs and pipeline' },
      { metric: 'Min or Days', label: 'quotes' },
      { metric: 'Cost Optimize', label: 'reduce or Avoi' },
    ],
    color: '#a44f98',
  },
  {
    code: 'XBA',
    title: 'X-sell Brokers Automation',
    icon: Network,
    subtitle: 'Broker Intelligence',
    problem: 'Limited product recommendations and cross-sell',
    opportunity: 'AI matching and automated cross-sell optimization',
    impact: [
      { metric: '2.8 x', label: 'ok' },
      { metric: '- 50%', label: 'churn' },
      { metric: '+ 10-20%', label: 'growth' },
    ],
    color: '#ee7d48',
  },
  {
    code: 'SNB',
    title: 'SDR New Business',
    icon: Rocket,
    subtitle: 'Business Development',
    problem: 'Cold outreach with low conversion rates',
    opportunity: 'AI-driven prospecting and personalized outreach',
    impact: [
      { metric: '5x more', label: 'meetings' },
      { metric: '60% less', label: 'cost/lead' },
      { metric: '24/7', label: 'prospecting' },
    ],
    color: '#f9b336',
  },
];

const stats = [
  { label: 'AI Models', value: '+ 15', sublabel: 'Ensemble voting' },
  { label: 'Processing Speed', value: '<2s', sublabel: 'Average decision' },
  { label: 'Accuracy', value: '98.4%', sublabel: 'Confidence score' },
];

export function BentoGrid() {
  return (
    <section id="products" className="relative bg-white py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ee7d48]/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-[11px] text-[#ee7d48] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            OUR PRODUCTS
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 max-w-4xl mx-auto leading-[1.1]"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Four products.{' '}
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
              One unified AI layer
            </span>
          </h2>
          <p
            className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Plug-and-play intelligence that connects to your existing systems. No migration, no downtime, just instant transformation.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={product.code} product={product} index={index} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="relative p-6 bg-gradient-to-br from-white to-gray-50/50 border border-black/[0.06] shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'linear-gradient(to right, #1c17ff, #a44f98, #f9b336)',
                }}
              />
              
              <div className="text-center">
                <motion.div
                  className="text-4xl mb-2 bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div
                  className="text-sm text-black mb-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 bg-gradient-to-br from-gray-50/50 to-white border border-black/[0.06] shadow-sm"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1c17ff]/10 to-[#f9b336]/10 flex items-center justify-center border border-black/[0.04]">
              <Globe2 className="w-6 h-6 text-[#1c17ff]" />
            </div>
            <div className="text-center">
              <h3
                className="text-lg text-black mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Built for Global Scale
              </h3>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Multi-region deployment • 99.99% uptime SLA • Enterprise security
              </p>
            </div>
          </div>
        </motion.div>

        {/* Data Protection & Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-8 md:p-10 bg-gradient-to-br from-white via-gray-50/30 to-white border border-black/[0.06] shadow-lg overflow-hidden relative"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336]" />

          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1c17ff]/15 to-[#a44f98]/15 flex items-center justify-center border border-[#1c17ff]/30 shrink-0">
                <Shield className="w-7 h-7 text-[#1c17ff]" />
              </div>
              <div>
                <h3
                  className="text-2xl text-black mb-2"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  Enterprise-Grade Data Protection{' '}
                  <span className="bg-gradient-to-r from-[#1c17ff] to-[#a44f98] bg-clip-text text-transparent">
                    & Compliance
                  </span>
                </h3>
                <p
                  className="text-sm text-gray-600 max-w-3xl"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  Your data security is our top priority. WIR Innovation is built with industry-leading standards to ensure complete protection and regulatory compliance.
                </p>
              </div>
            </div>

            {/* Compliance badges grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: 'LGPD Compliant',
                  desc: 'Full compliance with Brazilian data protection law',
                  icon: '🇧🇷',
                },
                {
                  title: 'ISO 27001',
                  desc: 'Information security management certification',
                  icon: '🔒',
                },
                {
                  title: 'SOC 2 Type II',
                  desc: 'Third-party audited security controls',
                  icon: '✓',
                },
                {
                  title: 'End-to-End Encryption',
                  desc: 'Data encrypted at rest and in transit',
                  icon: '🛡️',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="p-5 bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1c17ff]/20"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4
                    className="text-sm text-black mb-1.5"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 pt-6 border-t border-black/[0.06]"
            >
              <div className="text-center">
                <p
                  className="text-xs text-gray-600"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  🔐 Regular security audits • 📊 Data residency options • 👥 Dedicated compliance team • 🔄 Continuous monitoring
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = product.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="relative bg-white/90 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
      style={{
        border: '1px solid',
        borderColor: isHovered ? `${product.color}20` : 'rgba(0,0,0,0.06)',
      }}
    >
      {/* Top accent line with orange gradient */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        initial={{ scaleX: 0 }}
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0.3 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(to right, #ee7d48, #f9b336)',
          transformOrigin: 'left',
        }}
      />

      {/* Hover glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(600px circle at center, ${product.color}06, transparent 60%)`,
          }}
        />
      )}

      <div className="p-6 md:p-8 relative z-10">
        {/* Header with badge and icon */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: `${product.color}15`,
                border: `1px solid ${product.color}30`,
              }}
            >
              <Icon className="w-6 h-6" style={{ color: product.color }} />
            </div>
            <div>
              <h3
                className="text-xl mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: product.color }}
              >
                {product.title}
              </h3>
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {product.subtitle}
              </span>
            </div>
          </div>
          {/* Product code badge */}
          <div
            className="px-3 py-1 text-xs tracking-wider shrink-0"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              backgroundColor: `${product.color}15`,
              color: product.color,
              border: `1px solid ${product.color}30`,
            }}
          >
            {product.code}
          </div>
        </div>

        {/* Problem & Opportunity */}
        <div className="space-y-4 mb-6">
          <div>
            <span
              className="text-xs text-gray-500 tracking-[0.15em] uppercase block mb-2"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              The Problem
            </span>
            <p
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {product.problem}
            </p>
          </div>

          <div>
            <span
              className="text-xs text-gray-500 tracking-[0.15em] uppercase block mb-2"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              The Opportunity
            </span>
            <p
              className="text-sm text-gray-800 leading-relaxed"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              {product.opportunity}
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <span
            className="text-xs text-gray-600 tracking-[0.15em] uppercase block mb-4"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            Potential Impact
          </span>

          <div className="grid grid-cols-3 gap-3">
            {product.impact.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 + 0.3 }}
                className="relative p-3 bg-gradient-to-br from-white to-gray-50/50 border border-black/[0.06] shadow-sm text-center"
              >
                <div
                  className="text-xl md:text-2xl text-black mb-1 tabular-nums"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                >
                  {item.metric}
                </div>
                <div
                  className="text-[10px] text-gray-600 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {item.label}
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + i * 0.1 + 0.5 }}
                  className="h-0.5 mt-2 mx-auto"
                  style={{
                    background: `linear-gradient(to right, ${product.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}