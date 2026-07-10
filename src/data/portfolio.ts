import gallery1 from '../assets/photos/gallery-1.webp'
import gallery2 from '../assets/photos/gallery-2.webp'
import gallery3 from '../assets/photos/gallery-3.webp'
import gallery4 from '../assets/photos/gallery-4.webp'
import gallery5 from '../assets/photos/gallery-5.webp'

export interface PortfolioItem {
  image: string
  title: string
  category: string
}

export const portfolioItems: PortfolioItem[] = [
  { image: gallery1, title: 'Editorial ao Ar Livre', category: 'Fotografia' },
  { image: gallery2, title: 'Direção de Conteúdo', category: 'Produção' },
  { image: gallery3, title: 'Retrato de Marca Pessoal', category: 'Branding' },
  { image: gallery4, title: 'Ensaio Institucional', category: 'Fotografia' },
  { image: gallery5, title: 'Campanha Digital', category: 'Estratégia' },
]
