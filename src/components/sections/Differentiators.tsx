import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { differentiators } from '../../data/differentiators'

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-brown text-beige relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div className="container-px relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que trabalhar comigo"
          description="Uma combinação de sensibilidade jornalística, visão estratégica e comprometimento genuíno com cada entrega."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.08} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-terracotta-light/40 text-terracotta-light">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-1.5">{item.title}</h3>
                <p className="text-sm text-beige/65 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
