import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Brain,
  TrendingUp,
  Shield,
  Zap,
  FileText
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'O Futuro dos Seguros: Avaliação de Risco Impulsionada por IA',
    excerpt: 'Como a inteligência artificial está transformando modelos de seguros tradicionais e criando novas oportunidades de crescimento e eficiência.',
    category: 'Tecnologia',
    date: '1 de Março, 2026',
    readTime: '5 min de leitura',
    icon: Brain,
    color: '#1c17ff',
    gradient: 'from-[#1c17ff]/10 to-transparent',
  },
  {
    id: 2,
    title: 'Reduzindo Fraudes com Machine Learning',
    excerpt: 'Descubra como nossos modelos de redes neurais detectam padrões impossíveis de identificar em dados de sinistros, reduzindo fraudes em até 85%.',
    category: 'Tecnologia',
    date: '24 de Fevereiro, 2026',
    readTime: '7 min de leitura',
    icon: Shield,
    color: '#a44f98',
    gradient: 'from-[#a44f98]/10 to-transparent',
  },
  {
    id: 3,
    title: 'O Modelo SaaS + Taxa de Sucesso em Insurtech',
    excerpt: 'Por que escolhemos um modelo de receita híbrido que alinha nosso sucesso ao seu, e como isso impulsiona melhores resultados para todos.',
    category: 'Estratégia de Negócios',
    date: '18 de Fevereiro, 2026',
    readTime: '6 min de leitura',
    icon: TrendingUp,
    color: '#ee7d48',
    gradient: 'from-[#ee7d48]/10 to-transparent',
  },
  {
    id: 4,
    title: 'Arquitetura API-First: Construindo para Integração',
    excerpt: 'Aprenda como nossa abordagem API-first torna possível integrar-se a qualquer sistema de seguros existente em minutos, não meses.',
    category: 'Engenharia',
    date: '10 de Fevereiro, 2026',
    readTime: '8 min de leitura',
    icon: Zap,
    color: '#f9b336',
    gradient: 'from-[#f9b336]/10 to-transparent',
  },
  {
    id: 5,
    title: 'Do Legado à Inteligência: Evolução Sem Revolução',
    excerpt: 'Por que substituir todo o seu sistema é a decisão errada. Nossa abordagem para aumentar infraestrutura legada com IA.',
    category: 'Produto',
    date: '3 de Fevereiro, 2026',
    readTime: '5 min de leitura',
    icon: FileText,
    color: '#1c17ff',
    gradient: 'from-[#1c17ff]/10 to-transparent',
  },
  {
    id: 6,
    title: 'Inteligência de Risco em Tempo Real em 47 Mercados',
    excerpt: 'Como construímos uma rede global de inteligência que processa bilhões de pontos de dados para avaliar riscos em tempo real.',
    category: 'Mercado',
    date: '27 de Janeiro, 2026',
    readTime: '6 min de leitura',
    icon: Brain,
    color: '#a44f98',
    gradient: 'from-[#a44f98]/10 to-transparent',
  },
];

const categories = [
  'Todos',
  'Tecnologia',
  'Estratégia de Negócios',
  'Engenharia',
  'Produto',
  'Mercado',
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6" style={{ fontFamily: 'Sora, sans-serif' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1c17ff]/10 to-[#a44f98]/10 border border-[#1c17ff]/20 mb-6">
              <FileText size={14} className="text-[#1c17ff]" />
              <span className="text-xs tracking-wider uppercase text-[#1c17ff]" style={{ fontWeight: 600 }}>
                Insights & Ideas
              </span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Insights sobre{' '}
              <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
                IA & Seguros
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontWeight: 400, lineHeight: 1.6 }}
            >
              Mergulhos profundos na construção de infraestrutura de IA para a indústria de seguros
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#1c17ff] to-[#a44f98] text-white shadow-lg shadow-[#1c17ff]/30'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1c17ff]/30 hover:bg-[#1c17ff]/5'
                }`}
                style={{ fontWeight: 500 }}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-xl hover:border-gray-300/60 transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: post.color }}
                    >
                      <post.icon size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full"
                      style={{ 
                        fontWeight: 600,
                        backgroundColor: `${post.color}15`,
                        color: post.color
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3 
                    className="text-xl mb-3 text-gray-900 group-hover:text-[#1c17ff] transition-colors"
                    style={{ fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {post.title}
                  </h3>

                  <p 
                    className="text-sm text-gray-600 mb-4"
                    style={{ fontWeight: 400, lineHeight: 1.6 }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <button 
                      className="flex items-center gap-1 text-sm text-[#1c17ff] group-hover:gap-2 transition-all"
                      style={{ fontWeight: 500 }}
                    >
                      Ler
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#1c17ff]/5 to-[#a44f98]/5 border border-[#1c17ff]/10">
              <p className="text-sm text-gray-600" style={{ fontWeight: 500 }}>
                Mais conteúdo em breve. Inscreva-se para ficar atualizado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}