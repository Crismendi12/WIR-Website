import { motion } from 'motion/react';
import { TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    metric: '90%',
    label: 'Processamento mais rápido',
    sublabel: 'vs. fluxos manuais',
    color: '#1c17ff',
  },
  {
    icon: Clock,
    metric: '2.4min',
    label: 'Tempo médio de decisão',
    sublabel: 'automação ponta a ponta',
    color: '#a44f98',
  },
  {
    icon: Shield,
    metric: '97%',
    label: 'Taxa de aprovação direta',
    sublabel: 'submissões aprovadas automaticamente',
    color: '#ee7d48',
  },
  {
    icon: Zap,
    metric: '<30 days',
    label: 'Tempo de implantação',
    sublabel: 'integração completa',
    color: '#f9b336',
  },
];

export function StatsBar() {
  return (
    null
  );
}