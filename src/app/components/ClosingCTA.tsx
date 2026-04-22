import { motion } from 'motion/react';
import { Sparkles, Mail } from 'lucide-react';
import { useState } from 'react';

export function ClosingCTA() {
  const [email, setEmail] = useState('');

  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-50/50 to-white py-20 md:py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span
            className="inline-block text-[10px] text-[#ee7d48] tracking-[0.4em] uppercase px-4 py-2 rounded-full bg-[#ee7d48]/10"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            Early Access
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 leading-[1.1]"
          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
        >
          Join the{' '}
          <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
            new era
          </span>
          {' '}of insurance
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
        >
          Get exclusive early access to our AI platform. Limited spots available for pioneering insurance companies.
        </motion.p>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200/60 shadow-lg">
            <div className="text-center mb-6">
              <h3
                className="text-xl md:text-2xl text-black mb-3"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
              >
                Join Our Newsletter
              </h3>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
                Get exclusive insights, product updates, and industry trends delivered to your inbox
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Newsletter signup:', email);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200/60 bg-white focus:border-[#1c17ff] focus:outline-none transition-colors duration-200"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 400,
                  }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1c17ff 0%, #a44f98 50%, #f9b336 100%)',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                }}
              >
                <span className="text-sm tracking-wider uppercase">Subscribe</span>
              </motion.button>
            </form>

            <p
              className="text-xs text-gray-500 text-center mt-4"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200/60 text-center"
        >
          <p
            className="text-xs text-gray-500 tracking-wider"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Trusted by forward-thinking insurance companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}