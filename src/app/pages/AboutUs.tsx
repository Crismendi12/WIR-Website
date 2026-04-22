import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SocialProofSection } from '../components/SocialProofSection';
import { 
  Linkedin, 
  Building2, 
  Trophy, 
  Target,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Rocket,
  Heart,
  Sparkles
} from 'lucide-react';
import joseCarlosImage from 'figma:asset/ebace0503f0213a070d088226077d4bf4e05a673.png';
import nicholasWeiserImage from 'figma:asset/e89c2ded6e8e0e9df138da4f970da500a15f4fb0.png';
import amandaImage from 'figma:asset/b5863e4467cfc4dd5b953580a9fd0f52cb39d694.png';
import felipeImage from 'figma:asset/24217fa1372f1a7a6001c942dbc43c8d05ffbe06.png';
import jessImage from 'figma:asset/0cc97db3c08e4e16ab3eed711a0e53d69d4a9e2d.png';
import andreaImage from 'figma:asset/f44c4accfb2025a70b48a3e7ce1e850a67f1519f.png';
import avanteLogo from 'figma:asset/1ee77d6dc5cd19bf91735ef627eddf9652d066cf.png';
import mahwayLogo from 'figma:asset/2f9edf30f8f78e736ad786654c500e4924f49e78.png';

// Company logos
import locktonLogo from 'figma:asset/44a7d9aeb8a5d3840da50e2ee8690d716e3e007e.png';
import aonLogo from 'figma:asset/a2dbf6e650bcb115fb3aba75564709b31ccc36c6.png';
import gallagherLogo from 'figma:asset/3d44ce3499a65b12673071bf674116373654e51c.png';
import jltLogo from 'figma:asset/1b28e9aad41267b4c0bc6b64253cad7f4c64d690.png';
import ezzeLogo from 'figma:asset/6b8a47d4cc255f1a1446ce47051c3f6b56c37dc8.png';
import patriaLogo from 'figma:asset/cfd9e12cfb77e4b6cd901158ff458340f8302cb7.png';
import hapvidaLogo from 'figma:asset/4a4f632d8bb27c2e1f0a5a5c6f3091edceb9d37e.png';

import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();
  
  // Helper function to get company logo
  const getCompanyLogo = (companyName: string) => {
    const logoMap: { [key: string]: string } = {
      'Lockton': locktonLogo,
      'Aon': aonLogo,
      'Gallagher': gallagherLogo,
      'JLT Group': jltLogo,
      'JLT': jltLogo,
      'EZIE Seguros': ezzeLogo,
      'EZIE': ezzeLogo,
      'Pátria': patriaLogo,
      'Hapvida': hapvidaLogo,
    };
    return logoMap[companyName] || null;
  };
  
  const founders = [
    {
      name: 'Nicholas Weiser',
      title: 'CEO & Co-Founder',
      role: 'Chief Executive Officer',
      experience: '27 Anos',
      expertise: 'Seguros & Distribuição',
      bio: 'Empreendedor serial com profunda expertise operacional em distribuição de seguros, programas especiais e inovação em saúde. Construiu e escalou múltiplas empresas de seguros desde startup até liderança de mercado.',
      trackRecord: [
        'Empreendedor & Investidor de 5 startups de sucesso',
        '27 anos de experiência em empresas nacionais e globais',
        'Acionista e Co-Fundador de Seguradora (R$ 1 bi / receita em 4 anos)',
        'Ex C-Level e Acionista de Corretoras, Seguros e Insurtech',
        'Liderou 4 reestruturações de corretoras Nac e Internacionais de seguros',
      ],
      companies: [
        { name: 'Lockton', color: '#C41E3A' },
        { name: 'Aon', color: '#EE3124' },
        { name: 'Gallagher', color: '#D71920' },
        { name: 'JLT Group', color: '#002A5C' },
        { name: 'EZIE Seguros', color: '#FF6B00' },
      ],
      imageUrl: nicholasWeiserImage,
      color: '#1c17ff',
      linkedin: 'https://www.linkedin.com/in/nicholas-weiser',
    },
    {
      name: 'José Carlos De Paula',
      title: 'CSO / COO & Co-Founder',
      role: 'Chief Strategy Officer / Chief Operating Officer',
      experience: '30 Anos',
      expertise: 'Seguros & Saúde',
      bio: 'Líder executivo com vasta experiência construindo e escalando operações de seguros em instituições financeiras tier-1 e grupos de saúde pela América Latina.',
      trackRecord: [
        '30 anos de experiência em Seguros e Saúde',
        'C-Level em Seguradoras e Operadoras de Saúde',
        'Liderou transformação Digital na GNDI e Santander Corretora',
        'Atuou na consolidação de 35 M&As em Saúde',
        'CEO da Santander Corretora, C-Level do GNDI / Bain Capital e da Holding Athena Saúde / Pátria Investimentos',
      ],
      companies: [
        { name: 'EZIE', color: '#FF6B00' },
        { name: 'Pátria', color: '#1B4F9C' },
        { name: 'Hapvida', color: '#00A859' },
        { name: 'Aon', color: '#EE3124' },
        { name: 'Gallagher', color: '#D71920' },
        { name: 'JLT', color: '#002A5C' },
        { name: 'VIS', color: '#2C5AA0' },
      ],
      imageUrl: joseCarlosImage,
      color: '#a44f98',
      linkedin: 'https://www.linkedin.com/in/jose-carlos-de-paula-14407b7a',
    },
  ];

  return (
    <>
      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Founders Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-24 md:py-32 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1c17ff]/20 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1c17ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a44f98]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1c17ff]/10 via-[#a44f98]/10 to-[#ee7d48]/10 border border-[#1c17ff]/20 mb-6"
            >
              <Sparkles size={14} className="text-[#1c17ff]" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: '#1c17ff' }}
              >
                {t('about.leadership')}
              </span>
            </motion.div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-black mb-6 max-w-4xl mx-auto leading-[1.08]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              {t('about.meetFounders')}
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {t('about.foundersDesc')}
            </p>
          </motion.div>

          {/* Founders Grid */}
          <div className="space-y-10">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c17ff]/5 via-transparent to-[#a44f98]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left: Profile */}
                    <div className="lg:col-span-2 p-10 bg-gradient-to-br from-gray-50/80 to-white relative">
                      {/* Accent line */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ 
                          background: `linear-gradient(90deg, ${founder.color}00 0%, ${founder.color} 50%, ${founder.color}00 100%)`
                        }}
                      />
                      
                      <div className="flex items-start gap-6 mb-8">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-24 h-24 rounded-2xl overflow-hidden border-3 border-white shadow-xl flex-shrink-0 bg-gray-100 relative z-10">
                            {founder.imageUrl ? (
                              <ImageWithFallback
                                src={founder.imageUrl}
                                alt={founder.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <Users size={36} className="text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div 
                            className="absolute -inset-1 rounded-2xl blur-lg opacity-40"
                            style={{ backgroundColor: founder.color }}
                          />
                        </motion.div>
                        
                        <div className="flex-1 pt-1">
                          <h3
                            className="text-3xl text-black mb-2 leading-tight"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                          >
                            {founder.name}
                          </h3>
                          <p
                            className="text-xs tracking-[0.15em] uppercase mb-2"
                            style={{ 
                              fontFamily: 'Sora, sans-serif', 
                              fontWeight: 600,
                              color: founder.color 
                            }}
                          >
                            {founder.title}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <motion.div 
                          className="p-4 bg-white rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                          whileHover={{ y: -2 }}
                        >
                          <p
                            className="text-2xl mb-1"
                            style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontWeight: 700,
                              color: founder.color
                            }}
                          >
                            {founder.experience}
                          </p>
                          <p
                            className="text-[10px] text-gray-600 uppercase tracking-wider"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {t('about.experience')}
                          </p>
                        </motion.div>
                        <motion.div 
                          className="p-4 bg-white rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                          whileHover={{ y: -2 }}
                        >
                          <p
                            className="text-sm mb-1 leading-tight"
                            style={{ 
                              fontFamily: 'Inter, sans-serif', 
                              fontWeight: 700,
                              color: founder.color
                            }}
                          >
                            {founder.expertise}
                          </p>
                          <p
                            className="text-[10px] text-gray-600 uppercase tracking-wider"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {t('about.expertise')}
                          </p>
                        </motion.div>
                      </div>

                      <p
                        className="text-base text-gray-700 leading-relaxed mb-8"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {founder.bio}
                      </p>

                      <motion.a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Linkedin size={18} style={{ color: founder.color }} />
                        <span
                          className="text-sm"
                          style={{ 
                            fontFamily: 'Inter, sans-serif', 
                            fontWeight: 600,
                            color: founder.color
                          }}
                        >
                         {t('about.connectLinkedIn')}
                        </span>
                      </motion.a>
                    </div>

                    {/* Right: Background */}
                    <div className="lg:col-span-3 p-10 bg-white">
                      {/* Career Highlights */}
                      <div className="mb-10">
                        <h4
                          className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                        >
                          <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                         {t('about.careerHighlights')}
                        </h4>
                        <div className="space-y-4">
                          {founder.trackRecord.map((record, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-4 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"
                                style={{ backgroundColor: founder.color }}
                              />
                              <p
                                className="text-base text-gray-800 leading-relaxed"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                              >
                                {record}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Company Logos */}
                      <div>
                        <h4
                          className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                        >
                          <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                         {t('about.institutionalExperience')}
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {founder.companies.map((company, idx) => {
                            const logo = getCompanyLogo(company.name);
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/80 bg-white"
                              >
                                {logo ? (
                                  <img 
                                    src={logo} 
                                    alt={company.name}
                                    className="h-8 w-auto object-contain"
                                    style={{ maxWidth: '120px' }}
                                  />
                                ) : (
                                  <span 
                                    className="text-sm"
                                    style={{ 
                                      fontFamily: 'Inter, sans-serif', 
                                      fontWeight: 600,
                                      color: company.color
                                    }}
                                  >
                                    {company.name}
                                  </span>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-gray-900 via-[#1c17ff]/5 via-gray-900 to-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1c17ff]/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#1c17ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a44f98]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#a44f98]/20 border border-[#a44f98]/30 mb-6"
            >
              <Building2 size={14} className="text-[#a44f98]" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#a44f98]"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                {t('about.strategicSupport')}
              </span>
            </motion.div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl mx-auto leading-[1.08]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              {t('about.strategicPartners')}
            </h2>
          </motion.div>

          {/* MAHWAY Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-4 shadow-xl">
                <img 
                  src={mahwayLogo} 
                  alt="Mahway"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3
                  className="text-2xl mb-2"
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 700,
                    color: '#1c17ff'
                  }}
                >
                  MAHWAY
                </h3>
                <p
                  className="text-base text-gray-400"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  {t('about.californiaUSA')} {t('about.ventureBuilder')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jess Mah */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#1c17ff]/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl flex-shrink-0 bg-gray-700 group-hover:scale-105 transition-transform duration-300">
                    {jessImage ? (
                      <ImageWithFallback
                        src={jessImage}
                        alt="Jess Mah"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4
                      className="text-xl text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      Jess Mah
                    </h4>
                    <p
                      className="text-sm text-[#1c17ff]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      {t('about.partner')} & {t('about.cofounder')} - Mahway
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Forbes 30 Under 30',
                    'Youngest woman at Y Combinator (2010)',
                    'Built and scaled inDinero (Fintech) for 10+ years',
                    'Harvard Business School President\'s Program'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1c17ff] mt-2 flex-shrink-0" />
                      <p
                        className="text-base text-gray-300 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Andrea Barrica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#1c17ff]/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl flex-shrink-0 bg-gray-700 group-hover:scale-105 transition-transform duration-300">
                    {andreaImage ? (
                      <ImageWithFallback
                        src={andreaImage}
                        alt="Andrea Barrica"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4
                      className="text-xl text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      Andrea Barrica
                    </h4>
                    <p
                      className="text-sm text-[#1c17ff]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      {t('about.partner')} & {t('about.cofounder')} - Mahway
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Ex-Venture Partner at 500 Startups (500 Global)',
                    'Supported 100+ startups raising over USD 100M',
                    'Serial founder in fintech/insurtech & AI'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1c17ff] mt-2 flex-shrink-0" />
                      <p
                        className="text-base text-gray-300 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AVANTE Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-4 shadow-xl">
                <img 
                  src={avanteLogo} 
                  alt="Avante"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3
                  className="text-2xl mb-2"
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 700,
                    color: '#a44f98'
                  }}
                >
                  AVANTE
                </h3>
                <p
                  className="text-base text-gray-400"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  Holding de IA Estratégica - (Solidez financeira e governança de longo prazo)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Felipe Moraes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#a44f98]/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl flex-shrink-0 bg-gray-700 group-hover:scale-105 transition-transform duration-300">
                    {felipeImage ? (
                      <ImageWithFallback
                        src={felipeImage}
                        alt="Felipe Moraes"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4
                      className="text-xl text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      Felipe Moraes
                    </h4>
                    <p
                      className="text-sm text-[#a44f98]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      Sócio & Co-Fundador - Avante | Conselheiro WIR
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Ex-Managing Partner Innova Capital',
                    '20+ anos em finanças e VC no Brasil',
                    'R$ 1.6 bi em investimentos com EXITS',
                    'Co-Fundador e CEO da Bambú DCM'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a44f98] mt-2 flex-shrink-0" />
                      <p
                        className="text-base text-gray-300 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amanda Pinheiro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#a44f98]/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl flex-shrink-0 bg-gray-700 group-hover:scale-105 transition-transform duration-300">
                    {amandaImage ? (
                      <ImageWithFallback
                        src={amandaImage}
                        alt="Amanda Pinheiro"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4
                      className="text-xl text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      Amanda Pinheiro
                    </h4>
                    <p
                      className="text-sm text-[#a44f98]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      Sócia & Co-Fundadora - Avante
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    '14+ anos em gestão de fundos e mercados financeiros no Brasil',
                    'Especialista em PE e VC',
                    'C-Level na Innova Capital e Unbox Capital'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a44f98] mt-2 flex-shrink-0" />
                      <p
                        className="text-base text-gray-300 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ee7d48]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f9b336]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ee7d48]/20 to-[#f9b336]/20 border border-[#ee7d48]/30 mb-6"
            >
              <Trophy size={14} className="text-[#f9b336]" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#f9b336]"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                {t('about.whyUsBadge')}
              </span>
            </motion.div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl mx-auto leading-[1.08]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
            >
              {t('about.whyUsTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: t('about.whyUs1Title'), desc: t('about.whyUs1Desc'), color: '#1c17ff' },
              { icon: Target, title: t('about.whyUs2Title'), desc: t('about.whyUs2Desc'), color: '#a44f98' },
              { icon: Zap, title: t('about.whyUs3Title'), desc: t('about.whyUs3Desc'), color: '#ee7d48' },
              { icon: Shield, title: t('about.whyUs4Title'), desc: t('about.whyUs4Desc'), color: '#f9b336' },
              { icon: TrendingUp, title: t('about.whyUs5Title'), desc: t('about.whyUs5Desc'), color: '#1c17ff' },
              { icon: Rocket, title: t('about.whyUs6Title'), desc: t('about.whyUs6Desc'), color: '#a44f98' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top right, ${item.color}, transparent)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3
                  className="text-xl text-white mb-4 relative z-10"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base text-gray-300 leading-relaxed relative z-10"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}