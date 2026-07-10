import { motion } from 'framer-motion'
import { GraduationCap, Newspaper, Sparkles } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import aboutWebp from '../../assets/photos/about.webp'
import aboutJpg from '../../assets/photos/about.jpg'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Estudante de Jornalismo',
  },
  {
    icon: Newspaper,
    label: 'Comunicação com propósito',
  },
  {
    icon: Sparkles,
    label: 'Criatividade aplicada à estratégia',
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative mx-auto w-full max-w-md order-2 lg:order-1">
          <div
            aria-hidden
            className="absolute -top-6 -right-6 h-full w-full rounded-[2rem] border border-terracotta/30"
          />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brown/20">
            <picture>
              <source srcSet={aboutWebp} type="image/webp" />
              <img
                src={aboutJpg}
                alt="Isabella da Hora em ensaio ao ar livre"
                loading="lazy"
                className="w-full h-[480px] sm:h-[560px] object-cover"
                width={1100}
                height={1750}
              />
            </picture>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -left-8 hidden sm:block rounded-2xl bg-terracotta text-beige px-6 py-5 shadow-xl max-w-[13rem]"
          >
            <p className="font-serif text-3xl font-semibold leading-none">+5</p>
            <p className="text-xs uppercase tracking-wide mt-2 text-beige/80">
              anos criando conteúdo estratégico
            </p>
          </motion.div>
        </Reveal>

        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              Sobre mim
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight text-balance text-brown dark:text-beige">
              Comunicação que une sensibilidade jornalística e olhar estratégico.
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-4 text-brown/75 dark:text-beige/75 leading-relaxed">
            <p>
              Sou Isabella da Hora, estudante de Jornalismo apaixonada por transformar histórias em
              conexões reais entre marcas e pessoas. Ao longo da minha trajetória, uni a rigidez
              da apuração jornalística à criatividade da comunicação digital para criar conteúdos
              que informam, emocionam e geram resultado.
            </p>
            <p>
              Atuo como Social Media e produtora de conteúdo, acompanhando cada projeto do
              planejamento à entrega — da captação de imagem à publicação final — sempre com
              atenção aos detalhes que fazem a diferença na percepção de uma marca.
            </p>
            <p>
              Acredito que comunicação de verdade nasce da escuta. Por isso, cada estratégia que
              desenvolvo é pensada sob medida, unindo jornalismo, marketing digital e design para
              contar a história de cada cliente da forma mais autêntica possível.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="grid sm:grid-cols-3 gap-4 mt-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-2xl border border-sand dark:border-beige/10 bg-white/60 dark:bg-beige/5 p-5"
              >
                <item.icon className="text-terracotta" size={22} />
                <span className="text-sm font-medium text-brown dark:text-beige leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
