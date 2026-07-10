import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from '../ui/BrandIcons'
import { navLinks, site } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { icon: InstagramIcon, label: 'Instagram', href: site.instagram },
    { icon: LinkedinIcon, label: 'LinkedIn', href: site.linkedin },
    { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, label: 'Email', href: `mailto:${site.email}` },
  ]

  return (
    <footer className="bg-brown text-beige dark:bg-black dark:text-beige">
      <div className="container-px py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
          <span className="font-serif text-2xl font-semibold">
            Isabella <span className="text-terracotta-light">da Hora</span>
          </span>
          <p className="text-beige/60 max-w-sm leading-relaxed">
            Comunicação, estratégia e criatividade a serviço de marcas que querem se conectar de
            verdade com as pessoas.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
            Navegação
          </span>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-beige/70 hover:text-terracotta-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
            Conecte-se
          </span>
          <ul className="flex flex-col gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-beige/70 hover:text-terracotta-light transition-colors"
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-beige/10">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-beige/50">
          <p>© {year} Isabella da Hora. Todos os direitos reservados.</p>
          <p>Feito com propósito e criatividade.</p>
        </div>
      </div>
    </footer>
  )
}
