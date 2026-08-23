import { useLayoutEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDirection, pageVariants } from '@/lib/motion'

/** Sparad scrollposition per sida, för sidor med `restoreScroll`. */
const scrollPositions = new Map<string, number>()

/**
 * Läser en scrollavsikt ur `location.state`, satt av länken som navigerade hit.
 * "All works" ska landa högst upp i verklistan, inte där besökaren råkade vara
 * när hen klickade sig in i ett projekt — och det vet bara länken.
 */
const getScrollTarget = (state: unknown): string | undefined => {
  const to = (state as { scrollTo?: unknown } | null | undefined)?.scrollTo
  return typeof to === 'string' ? to : undefined
}

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
    // En uttalad avsikt från länken slår alltid den sparade positionen.
    // Effekten körs efter att DOM:en byggts men före paint, så elementet finns.
    const target = getScrollTarget(location.state)
    const section = target ? document.getElementById(target) : null

    if (section) {
      // scrollIntoView och inte en räknad offset: den respekterar rubrikens
      // scroll-mt, så luften ovanför blir densamma som för ankarlänkarna.
      section.scrollIntoView({ behavior: 'instant', block: 'start' })
    } else {
      const saved = restoreScroll ? scrollPositions.get(pathname) : undefined

      // 'instant' krävs — annars ärver scrollTo den globala scroll-behavior: smooth
      // och animerar en lång scroll genom hela sidan vid varje sidbyte.
      window.scrollTo({ top: saved ?? 0, left: 0, behavior: 'instant' })
    }

    // Sparandet får INTE ligga bakom en tidig return ovanför. Gjorde det det,
    // registrerades ingen cleanup när man kom hit via en scrollavsikt, och nästa
    // återbesök återställde till en position från ett tidigare besök.

    if (!restoreScroll) return
    return () => {
      scrollPositions.set(pathname, window.scrollY)
    }
  }, [pathname, restoreScroll, location.state])

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
