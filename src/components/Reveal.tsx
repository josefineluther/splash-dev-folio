import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_OUT } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  /** Fördröjning i sekunder, för att låta ett par element komma in efter varandra. */
  delay?: number
  className?: string
}

/**
 * Sidans enda scroll-avslöjande. Allt som tonar in vid scroll går genom den här
 * komponenten, så att rörelsen är densamma överallt — en toning och en liten
 * lyft, en gång per element.
 *
 * `MotionConfig reducedMotion="user"` i App gör att framer nollar rörelsen
 * automatiskt när användaren har valt reducerad rörelse.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ duration: 0.55, ease: EASE_OUT, delay }}
  >
    {children}
  </motion.div>
)

export default Reveal
