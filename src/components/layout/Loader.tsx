import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  loading: boolean
}

export function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-beige dark:bg-ink"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-serif text-2xl text-brown dark:text-beige"
          >
            ISABELLA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
