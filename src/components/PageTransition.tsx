import { useLayoutEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDirection, pageVariants } from '@/lib/motion'

/** Sparad scrollposition per sida, för sidor med `restoreScroll`. */
const scrollPositions = new Map<string, number>()

type Props = {
  children: ReactNode
  className?: string
  /**
   * Återgå till samma scrollposition när man kommer tillbaka till sidan istället
   * för att alltid hoppa upp. Används på startsidan så att man landar vid
   * projektlistan igen efter ett projektbesök.
   */
  restoreScroll?: boolean
}

const PageTransition = ({ children, className = '', restoreScroll = false }: Props) => {
  const location = useLocation()
  const { pathname } = location
  const direction = getDirection(location.state)

  // Körs vid MOUNT. AnimatePresence mode="wait" monterar den nya sidan först när
  // den gamla tonat ut färdigt, så scrollen sker medan skärmen är tom — användaren
  // ser aldrig den utgående sidan hoppa upp. En effekt på pathname-ändring hade
  // istället triggat direkt vid URL-bytet, mitt i utfadningen.
  useLayoutEffect(() => {
    const saved = restoreScroll ? scrollPositions.get(pathname) : undefined

    // 'instant' krävs — annars ärver scrollTo den globala scroll-behavior: smooth
    // och animerar en lång scroll genom hela sidan vid varje sidbyte.
    window.scrollTo({ top: saved ?? 0, left: 0, behavior: 'instant' })

    if (!restoreScroll) return
    return () => {
      scrollPositions.set(pathname, window.scrollY)
    }
  }, [pathname, restoreScroll])

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
