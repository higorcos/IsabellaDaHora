import {
  Sparkles,
  Target,
  MessageCircle,
  Layers,
  HeartHandshake,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'

export interface Differentiator {
  icon: LucideIcon
  title: string
  description: string
}

export const differentiators: Differentiator[] = [
  {
    icon: Sparkles,
    title: 'Criatividade',
    description: 'Olhar autoral para transformar ideias simples em conteúdos memoráveis.',
  },
  {
    icon: Target,
    title: 'Estratégia',
    description: 'Decisões guiadas por objetivos claros, não apenas por tendências.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação',
    description: 'Formação em Jornalismo aplicada para contar histórias com precisão.',
  },
  {
    icon: Layers,
    title: 'Organização',
    description: 'Processos estruturados do planejamento à entrega, sem perder prazos.',
  },
  {
    icon: HeartHandshake,
    title: 'Compromisso',
    description: 'Envolvimento genuíno com cada marca como se fosse um projeto próprio.',
  },
  {
    icon: BarChart3,
    title: 'Resultados',
    description: 'Acompanhamento constante de métricas para evoluir o que realmente importa.',
  },
]
