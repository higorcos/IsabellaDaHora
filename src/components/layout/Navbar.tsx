import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navLinks, site } from '../../data/site'

interface NavbarProps {
  isDark: boolean
  toggleDark: () => void
}

export function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-beige/85 dark:bg-ink/85 backdrop-blur-md shadow-sm shadow-brown/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <a href="#inicio" className="font-serif text-xl sm:text-2xl font-semibold text-brown dark:text-beige">
          Isabella <span className="text-terracotta">da Hora</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown/80 dark:text-beige/80 hover:text-terracotta dark:hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDark}
            aria-label="Alternar modo escuro"
            className="p-2.5 rounded-full border border-brown/20 dark:border-beige/20 text-brown dark:text-beige hover:border-terracotta hover:text-terracotta transition-colors"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-terracotta text-beige px-6 py-2.5 text-sm font-medium hover:bg-brown transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Alternar modo escuro"
            className="p-2.5 rounded-full border border-brown/20 dark:border-beige/20 text-brown dark:text-beige"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="p-2.5 rounded-full border border-brown/20 dark:border-beige/20 text-brown dark:text-beige"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-beige dark:bg-ink lg:hidden"
          >
            <div className="container-px flex items-center justify-between h-20">
              <span className="font-serif text-xl font-semibold text-brown dark:text-beige">
                Isabella <span className="text-terracotta">da Hora</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="p-2.5 rounded-full border border-brown/20 dark:border-beige/20 text-brown dark:text-beige"
              >
                <X size={18} />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center gap-8 h-[70vh]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl text-brown dark:text-beige hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-full bg-terracotta text-beige px-8 py-3 text-sm font-medium"
              >
                Solicitar orçamento
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
