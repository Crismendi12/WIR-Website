import { motion } from 'motion/react';
import { TrendingDown, Clock, AlertTriangle, DollarSign, Zap, Target, Database, Users } from 'lucide-react';
import nicholasWeiserImage from 'figma:asset/e89c2ded6e8e0e9df138da4f970da500a15f4fb0.png';
import { useNavigate } from 'react-router';

const problems = [
  {
    icon: Clock,
    stat: '40%',
    label: 'Ineficiencia',
    impact: 'do tempo do underwriter gasto com tarefas administrativas',
    source: 'Deloitte',
    color: '#1c17ff',
  },
  {
    icon: TrendingDown,
    stat: '70%',
    label: 'Atraso na Transformação Digital',
    impact: 'das seguradoras não executam inovação por limitação de TI',
    source: 'BCG',
    color: '#a44f98',
  },
  {
    icon: Zap,
    stat: '60%+',
    label: 'Falta de Agilidade no Atendimento',
    impact: 'dos brokers escolhem seguradoras pela velocidade de resposta',
    source: 'Capgemini',
    color: '#ee7d48',
  },
  {
    icon: Database,
    stat: '20-30%',
    label: 'Perda de Foco em Negócios',
    impact: 'do tempo corporativo perdido organizando dados não estruturados',
    source: 'Gartner',
    color: '#f9b336',
  },
];

export function ProblemSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-4"
          >
            <AlertTriangle size={12} className="text-red-600" />
            <span 
              className="text-[11px] tracking-wider uppercase text-red-700"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              O Custo de Operações Manuais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl mb-3 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >Processos Manuais e falta de automação inteligente não permitem escalar seus negócios</motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Subscrição manual, dados incompletos e fluxos desconectados custam bilhões em receita perdida
          </motion.p>
        </div>

        {/* Founder Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#1c17ff]/5 via-white to-[#a44f98]/5 border border-gray-200/60 mb-10"
        >
          <div className="flex flex-col md:flex-row items-start gap-5">
            {/* Photo placeholder */}
            <div className="shrink-0">
              <img
                src={nicholasWeiserImage}
                alt="Nicholas Weiser"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            {/* Quote content */}
            <div className="flex-1">
              <p 
                className="text-lg md:text-xl text-gray-900 mb-4 leading-relaxed italic"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                "Mercado de Seguros e Danos está crescendo dois dígitos. Mas a estrutura das Seguradoras não acompanha."
              </p>
              <div>
                <p 
                  className="text-sm text-gray-700"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Nicholas Weiser
                </p>
                <p 
                  className="text-xs text-gray-500"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  CEO & Co-Founder
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problem cards - data-focused grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-5 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-md transition-all duration-200">
                {/* Icon and stat */}
                <div className="flex items-start gap-4 mb-3">
                  <div 
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${problem.color}10` }}
                  >
                    <problem.icon size={20} style={{ color: problem.color }} />
                  </div>
                  <div>
                    <div 
                      className="text-2xl mb-0.5 tracking-tight"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: problem.color }}
                    >
                      {problem.stat}
                    </div>
                    <div 
                      className="text-[13px] text-gray-700"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                    >
                      {problem.label}
                    </div>
                  </div>
                </div>

                {/* Impact description */}
                <p 
                  className="text-sm text-gray-600 leading-relaxed pl-[60px]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  {problem.impact}
                </p>

                {/* Source */}
                <p 
                  className="text-xs text-gray-500 leading-relaxed pl-[60px] mt-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  Fonte: {problem.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcome message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative p-6 rounded-xl bg-gradient-to-br from-[#1c17ff]/5 via-white to-[#ee7d48]/5 border border-gray-200/60"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-center md:text-left">
              <p 
                className="text-base md:text-lg text-gray-900 mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
               WIR automatiza o fluxo de seguros de ponta a ponta
              </p>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
              >
               Transformando semanas em minutos e trabalho manual em execução inteligente
              </p>
            </div>
            <button
              data-clickable
              onClick={() => navigate('/solutions')}
              className="px-5 py-2.5 bg-gradient-to-r from-[#1c17ff] to-[#a44f98] text-white rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Veja como funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}