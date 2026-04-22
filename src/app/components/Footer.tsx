import { Linkedin, Twitter, Mail, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { WirLogo } from './WirLogo';
import { useLanguage } from '../contexts/LanguageContext';

const footerColumns = [
  {
    title: 'Produto',
    links: [
      { name: 'Soluções', href: '/solutions' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contato', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Termos de Serviço', href: '#terms' },
      { name: 'Segurança', href: '#security' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/wirinnovation', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/wirinnovation', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/wir-innovation', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/wirinnovation', label: 'Instagram' },
];

export function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="relative bg-white border-t border-gray-200/60 py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="inline-block mb-4"
            >
              <WirLogo className="h-12 w-auto" />
            </Link>
            <p
              className="text-sm text-gray-600 leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              Construindo infraestrutura de IA para seguros instantâneos
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  data-clickable
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-[#1c17ff] hover:border-[#1c17ff]/30 hover:bg-[#1c17ff]/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4
                  className="text-[11px] text-gray-900 tracking-wider uppercase mb-4"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          data-clickable
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          data-clickable
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col items-center gap-4">
          <p className="text-xs text-gray-500" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}>
            &copy; 2026 WIR Innovation. Todos os direitos reservados.
          </p>
          
          {/* Language selector */}
          <div className="flex items-center gap-3">
            <button
              data-clickable
              onClick={() => setLanguage('pt')}
              className={`text-xs transition-colors ${
                language === 'pt' 
                  ? 'text-[#1c17ff] font-semibold' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: language === 'pt' ? 600 : 400 }}
            >
              {t('lang.portuguese')}
            </button>
            <span className="text-gray-300">|</span>
            <button
              data-clickable
              onClick={() => setLanguage('en')}
              className={`text-xs transition-colors ${
                language === 'en' 
                  ? 'text-[#1c17ff] font-semibold' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: language === 'en' ? 600 : 400 }}
            >
              {t('lang.english')}
            </button>
            <span className="text-gray-300">|</span>
            <button
              data-clickable
              onClick={() => setLanguage('es')}
              className={`text-xs transition-colors ${
                language === 'es' 
                  ? 'text-[#1c17ff] font-semibold' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: language === 'es' ? 600 : 400 }}
            >
              {t('lang.spanish')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}