import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  FileText,
  Brain,
  BarChart3,
  Shield,
  DollarSign,
  Layout,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    icon: FileText,
    title: 'Recepção de Solicitação',
    description: 'Captura e validação de submissões multicanal',
    details: [
      { label: 'ID da Cotação', value: 'Q-2847-2026' },
      { label: 'Fonte', value: 'API Portal do Corretor' },
      { label: 'Produto', value: 'Seguro de Construção' },
      { label: 'Status', value: 'Validado', chip: 'green' },
    ],
    color: '#1c17ff',
    processing: '<200ms',
  },
  {
    id: 2,
    icon: Brain,
    title: 'Extração de Documentos por IA',
    description: 'Extração inteligente de dados e mapeamento de campos',
    details: [
      { label: 'Campos Extraídos', value: '47/47' },
      { label: 'Confiança', value: '98.7%' },
      { label: 'Segurado', value: 'BuildTech Construction' },
      { label: 'Status', value: 'Verificado', chip: 'green' },
    ],
    color: '#a44f98',
    processing: '~1.8s',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Dashboard de Inteligência de Negócios',
    description: 'Inteligência em tempo real de corretoras e submissões',
    details: [
      { label: 'Corretora', value: 'Construction Risk Partners' },
      { label: 'Score da Corretora', value: '92/100' },
      { label: 'Conv. Histórica', value: '71%' },
      { label: 'Prioridade', value: 'Alta', chip: 'green' },
    ],
    color: '#ee7d48',
    processing: '~400ms',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Avaliação de Risco',
    description: 'Score de risco e detecção de fraude por ML',
    details: [
      { label: 'Score de Risco', value: '74/100' },
      { label: 'Probabilidade de Fraude', value: '0.01%' },
      { label: 'Histórico de Segurança', value: 'Excelente' },
      { label: 'Decisão', value: 'Aprovado', chip: 'green' },
    ],
    color: '#f9b336',
    processing: '~2.1s',
  },
  {
    id: 5,
    icon: DollarSign,
    title: 'Motor de Precificação',
    description: 'Cálculo dinâmico e otimização de prêmio',
    details: [
      { label: 'Prêmio Base', value: '$1,247,500' },
      { label: 'Ajuste de Risco', value: '+8%' },
      { label: 'Prêmio Final', value: '$1,347,300' },
      { label: 'Status', value: 'Cotado', chip: 'green' },
    ],
    color: '#10b981',
    processing: '~650ms',
  },
  {
    id: 6,
    icon: Layout,
    title: 'Dashboard e Priorização',
    description: 'Fila de subscritor e suporte à decisão',
    details: [
      { label: 'Atribuído a', value: 'Sarah M.' },
      { label: 'Posição na Fila', value: '#3' },
      { label: 'SLA Restante', value: '2h 47m' },
      { label: 'Ação', value: 'Revisar', chip: 'yellow' },
    ],
    color: '#6366f1',
    processing: '~100ms',
  },
];

const kpiMetrics = [
  { label: 'Tempo Médio de Processamento', value: '4.8s', change: '-91%', color: '#1c17ff' },
  { label: 'Taxa de Aprovação Direta', value: '94.3%', change: '+47%', color: '#10b981' },
  { label: 'Pontos de Contato Manuais', value: '1.2', change: '-85%', color: '#ee7d48' },
];

export function WorkflowAutomationEnterprise() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const currentStep = workflowSteps[currentStepIndex];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1c17ff]/[0.06] to-[#a44f98]/[0.06] border border-[#1c17ff]/10 mb-4"
          >
            <CheckCircle2 size={12} className="text-[#1c17ff]" />
            <span 
              className="text-[11px] tracking-wider uppercase text-gray-700"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Fluxo Automatizado
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl mb-3 text-gray-900 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
          >
            Da submissão à cotação em segundos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            Agentes de IA e sistema de plataforma que processam submissões em tempo real — da entrada à vinculação, totalmente automatizado
          </motion.p>
        </div>

        {/* Workflow grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative group col-span-full flex items-center justify-center"
            >
              <div className="relative p-8 rounded-xl bg-white border border-gray-200/80 hover:border-gray-300/80 hover:shadow-md transition-all duration-200 overflow-hidden max-w-md w-full">
                {/* Animated progress pulse on card */}
                <motion.div
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity
                  }}
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: currentStep.color }}
                />

                {/* Step number with pulse animation */}
                <div className="absolute top-4 right-4">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center text-sm relative overflow-hidden"
                    style={{
                      backgroundColor: `${currentStep.color}15`,
                      color: currentStep.color,
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {currentStep.id}
                  </div>
                </div>

                {/* Icon and header */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${currentStep.color}10` }}
                  >
                    <currentStep.icon size={24} style={{ color: currentStep.color }} />
                  </div>
                  <div className="flex-1 pr-8">
                    <h3
                      className="text-base text-gray-900 mb-1"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                    >
                      {currentStep.title}
                    </h3>
                    <p
                      className="text-sm text-gray-600 leading-tight"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                    >
                      {currentStep.description}
                    </p>
                  </div>
                </div>

                {/* Details grid */}
                <div className="bg-gray-50/50 rounded-lg p-4 mb-4 relative z-10">
                  <div className="space-y-2.5">
                    {currentStep.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span
                          className="text-xs text-gray-500 uppercase tracking-wider"
                          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                        >
                          {detail.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm text-gray-900"
                            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                          >
                            {detail.value}
                          </span>
                          {detail.chip && (
                            <div
                              className={`w-2.5 h-2.5 rounded-full ${
                                detail.chip === 'green' ? 'bg-green-500' : 'bg-amber-500'
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Processing time */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 relative z-10">
                  <span
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                  >
                    Tempo de processamento
                  </span>
                  <span
                    className="text-base"
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 700,
                      color: currentStep.color
                    }}
                  >
                    {currentStep.processing}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* KPI summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpiMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-3xl mb-1"
                  style={{ 
                    fontFamily: 'Sora, sans-serif', 
                    fontWeight: 700,
                    color: metric.color
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-sm text-gray-900 mb-1"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {metric.label}
                </div>
                <div 
                  className="text-xs text-green-600"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  {metric.change} vs processo manual
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}