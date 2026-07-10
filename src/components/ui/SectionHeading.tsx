import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-balance text-brown dark:text-beige">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-brown/70 dark:text-beige/70 text-balance">
          {description}
        </p>
      )}
    </Reveal>
  )
}
