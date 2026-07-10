import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { portfolioItems } from '../../data/portfolio'
import { site } from '../../data/site'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Portfólio"
          title="Trabalhos que contam histórias"
          description="Uma seleção de projetos autorais e colaborações que unem fotografia, produção e estratégia de conteúdo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 0.08}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? 'h-full min-h-[420px] lg:min-h-[540px]' : 'h-[280px] sm:h-[320px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs uppercase tracking-[0.2em] text-terracotta-light">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-beige font-medium mt-1">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-[280px] sm:h-[320px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-dashed border-terracotta/40 bg-terracotta/5 text-center transition-colors duration-300 hover:bg-terracotta/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-beige transition-transform duration-300 group-hover:scale-110">
                <InstagramIcon size={22} />
              </div>
              <div>
                <p className="font-serif text-lg text-brown dark:text-beige">Ver mais no Instagram</p>
                <p className="text-sm text-brown/60 dark:text-beige/60 mt-1 inline-flex items-center gap-1">
                  {site.instagramHandle} <ArrowUpRight size={14} />
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
