import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  icon?: ReactNode
  className?: string
}

export function Button({ href, children, variant = 'primary', icon, className = '' }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300'

  const styles =
    variant === 'primary'
      ? 'bg-terracotta text-beige hover:bg-brown hover:shadow-lg hover:shadow-terracotta/20 hover:-translate-y-0.5'
      : 'border border-brown/30 text-brown hover:border-terracotta hover:bg-terracotta hover:text-beige hover:-translate-y-0.5 dark:border-beige/30 dark:text-beige dark:hover:border-terracotta'

  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </motion.a>
  )
}
