import {
  Share2,
  ClipboardList,
  Clapperboard,
  Camera,
  Aperture,
  Film,
  PartyPopper,
  TrendingUp,
} from 'lucide-react'
import { InstagramIcon } from '../components/ui/BrandIcons'
import type { ComponentType } from 'react'

export interface Service {
  icon: ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description:
      'Administração completa de perfis com identidade visual consistente e presença digital estratégica.',
  },
  {
    icon: ClipboardList,
    title: 'Planejamento de Conteúdo',
    description:
      'Calendários editoriais pensados para os objetivos da marca, do tom de voz ao formato de cada post.',
  },
  {
    icon: Clapperboard,
    title: 'Produção de Conteúdo',
    description:
      'Roteiro, direção e execução de conteúdos autênticos que comunicam com clareza e propósito.',
  },
  {
    icon: Camera,
    title: 'Captação de Imagens',
    description:
      'Registro fotográfico e audiovisual em campo, com sensibilidade estética para cada contexto.',
  },
  {
    icon: Aperture,
    title: 'Fotografia',
    description:
      'Ensaios e retratos profissionais com luz, composição e narrativa visual de alto padrão.',
  },
  {
    icon: Film,
    title: 'Edição de Vídeos',
    description:
      'Montagem e finalização de vídeos para redes sociais, com ritmo, cor e identidade sonora.',
  },
  {
    icon: PartyPopper,
    title: 'Cobertura de Eventos',
    description:
      'Documentação completa de eventos corporativos e sociais, do briefing à entrega final.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégias Digitais',
    description:
      'Análise de dados e planejamento de campanhas para gerar alcance, engajamento e resultado.',
  },
  {
    icon: InstagramIcon,
    title: 'Consultoria para Instagram',
    description:
      'Diagnóstico e otimização de perfil, feed e conteúdo para posicionar a marca com autoridade.',
  },
]
