import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { services } from '../../data/services'

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-sand/25 dark:bg-white/[0.02]">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="O que eu faço"
          title="Serviços pensados para fortalecer sua marca"
          description="Soluções completas em comunicação digital, da estratégia à execução, para negócios que querem se destacar."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.08}>
              <div className="group h-full flex flex-col gap-5 rounded-2xl bg-white dark:bg-beige/5 border border-sand dark:border-beige/10 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brown/10 hover:border-terracotta/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors duration-300 group-hover:bg-terracotta group-hover:text-beige">
                  <service.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-medium text-brown dark:text-beige">
                  {service.title}
                </h3>
                <p className="text-sm text-brown/65 dark:text-beige/65 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
