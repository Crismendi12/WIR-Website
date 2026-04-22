import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import { WirLogo } from './WirLogo';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { titleKey: 'nav.home', href: '/' },
  { titleKey: 'nav.about', href: '/about' },
  { titleKey: 'nav.solutions', href: '/solutions' },
  { titleKey: 'nav.blog', href: '/blog' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link
              to="/"
              data-clickable
              className="relative z-10 flex items-center ml-8 md:ml-12"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <WirLogo className="h-24 md:h-26 w-auto" />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.titleKey}
                  to={item.href}
                  data-clickable
                  className="px-3.5 py-2 text-[13px] text-gray-700 hover:text-black transition-colors duration-150 tracking-tight"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {t(item.titleKey)}
                </Link>
              ))}

              {/* Language Switcher - Discrete */}
              <div className="relative group ml-1">
                <button
                  data-clickable
                  className="px-2.5 py-2 text-gray-500 hover:text-gray-800 transition-colors duration-150"
                  onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                >
                  <Globe size={15} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-[9px] text-gray-500 whitespace-nowrap tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {language === 'en' ? 'PT' : 'EN'}
                  </span>
                </div>
              </div>

              <div className="ml-3 pl-3 border-l border-gray-200/80">
                <button
                  data-clickable
                  onClick={() => navigate('/contact')}
                  className="px-4 py-1.5 text-[12px] tracking-wide text-white rounded-md bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] hover:shadow-lg hover:shadow-[#1c17ff]/25 transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  {t('nav.getStarted')}
                </button>
              </div>
            </div>

            <button
              data-clickable
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-700 hover:text-black transition-colors"
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-white/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.titleKey}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.08 }}
                    className="text-2xl text-gray-700 hover:text-black transition-colors"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                  >
                    {t(item.titleKey)}
                  </motion.div>
                </Link>
              ))}
              
              {/* Language Switcher Mobile */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
              >
                <Globe size={18} />
                <span className="text-sm">{language === 'en' ? 'Português' : 'English'}</span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] text-white text-base shadow-lg rounded-lg"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
              >
                {t('nav.getStarted')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}