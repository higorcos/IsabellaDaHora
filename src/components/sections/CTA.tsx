import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { site } from '../../data/site'

export function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container-px">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-terracotta px-8 py-20 sm:px-16 sm:py-24 text-center">
          <div
            aria-hidden
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brown/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-beige/20 blur-3xl"
          />
          <div className="relative flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-beige/80">
              Vamos conversar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-beige text-balance">
              Vamos transformar sua presença digital?
            </h2>
            <p className="text-beige/85 text-lg text-balance">
              Fale comigo agora e descubra como estratégia, conteúdo e comunicação podem elevar
              sua marca a um novo patamar.
            </p>
            <Button
              href={`https://wa.me/${site.whatsapp}`}
              icon={<ArrowRight size={16} />}
              className="bg-beige! text-brown! hover:bg-brown! hover:text-beige!"
            >
              Entrar em contato
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
