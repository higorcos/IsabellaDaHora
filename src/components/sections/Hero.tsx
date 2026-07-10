import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { site } from '../../data/site'
import heroWebp from '../../assets/photos/hero.webp'
import heroJpg from '../../assets/photos/hero.jpg'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-0"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sand/30 dark:bg-terracotta/10 blur-3xl"
      />

      <div className="container-px relative grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col gap-7 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta"
          >
            Jornalista &amp; Social Media 
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-medium leading-[1.1] text-balance text-brown dark:text-beige"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-brown/70 dark:text-beige/70 max-w-lg text-balance leading-relaxed"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-3"
          >
            <Button href={`https://wa.me/${site.whatsapp}`} icon={<ArrowRight size={16} />}>
              Solicitar orçamento
            </Button>
            <Button href="#portfolio" variant="outline">
              Ver portfólio
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] border border-terracotta/30"
          />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brown/30">
            <picture>
              <source srcSet={heroWebp} type="image/webp" />
              <img
                src={heroJpg}
                alt="Isabella da Hora, jornalista e social media"
                className="w-full h-[520px] sm:h-[600px] lg:h-[640px] object-cover"
                width={1400}
                height={2100}
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-brown/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-beige dark:bg-ink border border-sand dark:border-brown/40 px-5 py-4 shadow-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-terracotta animate-pulse" />
            <span className="text-sm font-medium text-brown dark:text-beige">
              Disponível para novos projetos
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para próxima seção"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-brown/40 dark:text-beige/40 hover:text-terracotta transition-colors"
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  )
}
