import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Send,
  Linkedin,
  Building2,
  Users,
  Zap,
  Twitter,
  Facebook,
  Instagram,
  Phone
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    interest: 'general',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'contato@wirinnovation.ai',
      href: 'mailto:contato@wirinnovation.ai',
      color: '#1c17ff',
    },
    {
      icon: MapPin,
      title: 'Localização',
      detail: 'São Paulo, Brasil',
      href: null,
      color: '#a44f98',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      detail: 'Siga nossas atualizações',
      href: 'https://linkedin.com/company/wir-innovation',
      color: '#ee7d48',
    },
  ];

  const socialMedia = [
    { icon: Twitter, href: 'https://twitter.com/wirinnovation', label: 'X (Twitter)', color: '#1c17ff' },
    { icon: Facebook, href: 'https://facebook.com/wirinnovation', label: 'Facebook', color: '#a44f98' },
    { icon: Linkedin, href: 'https://linkedin.com/company/wir-innovation', label: 'LinkedIn', color: '#ee7d48' },
    { icon: Instagram, href: 'https://instagram.com/wirinnovation', label: 'Instagram', color: '#f9b336' },
  ];

  const interestAreas = [
    { value: 'general', label: 'Consulta Geral', icon: Mail },
    { value: 'demo', label: 'Solicitar Demonstração', icon: Zap },
    { value: 'partnership', label: 'Parcerias', icon: Users },
    { value: 'enterprise', label: 'Soluções Empresariais', icon: Building2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6" style={{ fontFamily: 'Sora, sans-serif' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-[10px] text-[#1c17ff] tracking-[0.4em] uppercase mb-6 px-4 py-2 rounded-full bg-[#1c17ff]/10"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Entre em Contato
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-6 leading-[1.08]"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              Pronto para{' '}
              <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                começar?
              </span>
            </h1>

            <p
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              Solicite uma demonstração, discuta oportunidades de parceria ou saiba como a WIR pode transformar suas operações de seguros
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2
                  className="text-2xl text-black mb-4"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  Informações de Contato
                </h2>
                <p
                  className="text-sm text-gray-600 leading-relaxed mb-8"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  Entre em contato através de qualquer um desses canais. Normalmente respondemos em até 24 horas.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl hover:shadow-md transition-all duration-300">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${item.color}10`,
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-wider text-gray-500 mb-1"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="text-sm text-black"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-gradient-to-br from-gray-50/50 to-white border border-gray-200/60 rounded-2xl"
              >
                <h3
                  className="text-sm text-black mb-4"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  Siga-nos
                </h3>
                <div className="flex gap-3">
                  {socialMedia.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-lg flex items-center justify-center border border-gray-200/60 hover:shadow-md transition-all duration-300"
                        style={{
                          backgroundColor: `${social.color}10`,
                        }}
                        title={social.label}
                      >
                        <Icon className="w-5 h-5" style={{ color: social.color }} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Newsletter Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 bg-gradient-to-br from-[#1c17ff]/5 to-[#a44f98]/5 border border-[#1c17ff]/20 rounded-2xl"
              >
                <h3
                  className="text-lg text-black mb-2"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  Receba nossas novidades
                </h3>
                <p
                  className="text-xs text-gray-600 mb-4"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  Fique por dentro das últimas atualizações sobre IA e seguros
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Newsletter subscription:', newsletterEmail);
                    setNewsletterEmail('');
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(135deg, #1c17ff 0%, #a44f98 100%)',
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Inscreva-se
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3"
            >
              <div className="p-8 bg-white border border-gray-200/60 rounded-2xl shadow-lg">
                <h2
                  className="text-2xl text-black mb-2"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  Envie-nos uma mensagem
                </h2>
                <p
                  className="text-sm text-gray-600 mb-8 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs text-gray-700 mb-2 uppercase tracking-wider"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="João Silva"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs text-gray-700 mb-2 uppercase tracking-wider"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="joao@empresa.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs text-gray-700 mb-2 uppercase tracking-wider"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da sua empresa"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs text-gray-700 mb-2 uppercase tracking-wider"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                      >
                        Cargo
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="ex: CTO, CEO"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  {/* Interest Area */}
                  <div>
                    <label
                      className="block text-xs text-gray-700 mb-3 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                    >
                      Estou interessado em
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interestAreas.map((area) => {
                        const AreaIcon = area.icon;
                        return (
                          <label
                            key={area.value}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                              formData.interest === area.value
                                ? 'border-[#1c17ff] bg-[#1c17ff]/5'
                                : 'border-gray-200/60 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="interest"
                              value={area.value}
                              checked={formData.interest === area.value}
                              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                              className="sr-only"
                            />
                            <AreaIcon
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: formData.interest === area.value ? '#1c17ff' : '#9ca3af' }}
                            />
                            <span
                              className="text-sm"
                              style={{
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: formData.interest === area.value ? 600 : 400,
                                color: formData.interest === area.value ? '#1c17ff' : '#374151',
                              }}
                            >
                              {area.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs text-gray-700 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                    >
                      Mensagem *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre seu projeto ou consulta..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200 resize-none"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #1c17ff 0%, #a44f98 50%, #f9b336 100%)',
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span className="text-sm tracking-wider uppercase">Enviar Mensagem</span>
                  </motion.button>

                  <p
                    className="text-xs text-gray-500 text-center"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                  >
                    Ao enviar este formulário, você concorda com nossa política de privacidade e termos de serviço.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-20 md:py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-black mb-6 leading-[1.1]"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
            >
              Prefere uma conversa rápida?
            </h2>
            <p
              className="text-base text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              Agende uma reunião de 30 minutos com nossa equipe para discutir como a WIR pode transformar suas operações de seguros.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#1c17ff] text-[#1c17ff] hover:bg-[#1c17ff] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
              }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Agendar Reunião</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

    </>
  );
}