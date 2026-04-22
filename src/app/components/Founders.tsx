import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Building2, Users, Trophy, Handshake } from 'lucide-react';

export function Founders() {
  const teamMembers = [
    {
      name: 'Lucas Ferreira',
      title: 'Co-Founder & CEO',
      background: 'Ex-Venture Builder at top BR accelerator. Built 3 startups from 0→1. Deep insurance expertise.',
      capabilities: ['Strategy & Vision', 'Insurance Deep Tech', 'Venture Building'],
      imageUrl: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjYwMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#1c17ff]/10 to-[#a44f98]/5',
      color: '#1c17ff',
    },
    {
      name: 'Rafael Santos',
      title: 'Co-Founder & CTO',
      background: 'Former ML Engineer at Scale AI unicorn. Stanford CS. Built production AI systems serving millions.',
      capabilities: ['AI/ML Engineering', 'System Architecture', 'Product Development'],
      imageUrl: 'https://images.unsplash.com/photo-1634133472760-e5c2bd346787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVjaCUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjYzNjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#ee7d48]/10 to-[#f9b336]/5',
      color: '#ee7d48',
    },
  ];

  const companyHighlights = [
    {
      icon: Building2,
      title: 'Startup + Holding Structure',
      description: 'Backed by venture building methodology with robust governance and operational framework',
      color: '#1c17ff',
    },
    {
      icon: Users,
      title: 'Strategic Investors',
      description: 'Supported by industry leaders and insurance market veterans who believe in our vision',
      color: '#a44f98',
    },
    {
      icon: Trophy,
      title: 'Unique Value Proposition',
      description: 'The only AI layer that plugs directly into existing systems without migration or downtime',
      color: '#ee7d48',
    },
  ];

  const partners = [
    {
      name: 'Leading Insurtech Accelerator',
      type: 'Program Partner',
      description: 'Access to mentorship and industry network',
    },
    {
      name: 'Top-tier Cloud Provider',
      type: 'Technology Partner',
      description: 'Enterprise infrastructure and AI capabilities',
    },
    {
      name: 'Insurance Market Leaders',
      type: 'Strategic Advisors',
      description: 'Deep market insights and distribution channels',
    },
  ];

  return (
    <section id="team" className="relative bg-white py-20 md:py-24 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a44f98]/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-[11px] text-[#a44f98] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            About WIR Innovation
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-6 max-w-3xl mx-auto leading-[1.1]"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            A unique company built to{' '}
            <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
              transform insurance
            </span>
          </h2>
          <p
            className="text-sm text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            More than a startup — a venture-built company with the structure, backing, and partnerships to deliver real transformation.
          </p>
        </motion.div>

        {/* Company Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {companyHighlights.map((highlight, i) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-black/[0.04] rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${highlight.color}15`,
                    border: `2px solid ${highlight.color}30`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: highlight.color }} />
                </div>
                <h3
                  className="text-base text-black mb-2 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[11px] text-[#f9b336] tracking-[0.35em] uppercase mb-4 block"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              Leadership Team
            </span>
            <h2
              className="text-3xl sm:text-4xl text-black leading-[1.1] mb-6"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              Experienced operators with{' '}
              <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                venture building DNA
              </span>
            </h2>
            <p
              className="text-base text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our founders combine deep insurance market knowledge with world-class technical expertise. We're not just building software — we're building the infrastructure layer for the entire industry.
            </p>
            <p
              className="text-base text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
            >
              Backed by a holding structure that provides strategic resources, operational excellence, and long-term stability.
            </p>

            {/* Mission statement */}
            <div className="p-5 border-l-4 border-[#1c17ff] bg-gradient-to-r from-[#1c17ff]/[0.05] to-transparent rounded-r-xl">
              <p
                className="text-sm text-gray-700 italic leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                "We're not here to make incremental improvements. We're building the AI layer that will power the next generation of insurance."
              </p>
            </div>
          </motion.div>

          {/* Right: Team member cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-4">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`bg-gradient-to-br ${member.gradient} p-6 border border-black/[0.04] shadow-sm hover:shadow-xl transition-all duration-300 group rounded-xl`}
                >
                  <div className="flex gap-5">
                    {/* Circular photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <ImageWithFallback
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-lg text-black mb-1 leading-tight"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-[11px] tracking-wider uppercase mb-3"
                        style={{ 
                          fontFamily: 'Sora, sans-serif', 
                          fontWeight: 600,
                          color: member.color 
                        }}
                      >
                        {member.title}
                      </p>

                      {/* Background description */}
                      <p
                        className="text-xs text-gray-600 mb-3 leading-relaxed"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                      >
                        {member.background}
                      </p>

                      {/* Capabilities tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="px-2 py-1 text-[10px] rounded-full border"
                            style={{
                              fontFamily: 'Sora, sans-serif',
                              fontWeight: 600,
                              backgroundColor: `${member.color}10`,
                              borderColor: `${member.color}30`,
                              color: member.color,
                            }}
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      {/* LinkedIn icon */}
                      <div className="flex">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/50 hover:bg-white border border-black/[0.06] transition-all duration-200 group-hover:scale-110"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={14} style={{ color: member.color }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Venture Building Badge */}
            <motion.div
              className="mt-6 p-4 bg-white border-2 border-[#1c17ff]/20 shadow-md rounded-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1c17ff]/20 to-[#a44f98]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏗️</span>
                </div>
                <div className="flex-1">
                  <p
                    className="text-[10px] text-[#1c17ff] tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    Venture Building DNA
                  </p>
                  <p
                    className="text-xs text-gray-700 leading-snug"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                  >
                    Built on robust capabilities from 0→1 company building
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border-2 border-black/[0.04] shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ee7d48]/15 to-[#f9b336]/15 flex items-center justify-center border-2 border-[#ee7d48]/30"
            >
              <Handshake className="w-6 h-6 text-[#ee7d48]" />
            </div>
            <div>
              <h3
                className="text-2xl text-black"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                Strategic Partners
              </h3>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                Collaborative ecosystem powering our growth
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="p-5 bg-white border border-black/[0.04] rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-[10px] mb-3"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                    backgroundColor: '#ee7d4815',
                    color: '#ee7d48',
                  }}
                >
                  {partner.type}
                </div>
                <h4
                  className="text-sm text-black mb-2"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {partner.name}
                </h4>
                <p
                  className="text-xs text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
