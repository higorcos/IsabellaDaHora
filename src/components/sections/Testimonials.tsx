import { Quote, Star } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Marcas que confiaram no meu trabalho"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 2) * 0.1}>
              <div className="h-full flex flex-col gap-5 rounded-2xl bg-white dark:bg-beige/5 border border-sand dark:border-beige/10 p-8">
                <Quote className="text-terracotta/40" size={28} />
                <p className="text-brown/80 dark:text-beige/80 leading-relaxed flex-1">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sand dark:border-beige/10">
                  <div>
                    <p className="font-medium text-brown dark:text-beige">{testimonial.name}</p>
                    <p className="text-sm text-brown/55 dark:text-beige/55">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5 text-terracotta">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
