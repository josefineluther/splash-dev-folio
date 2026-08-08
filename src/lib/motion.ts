import type { Variants } from 'framer-motion'

/** Decelererande kurva — läses som att något "landar", inte studsar. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN = [0.4, 0, 1, 1] as const

/**
 * Svepriktning: 1 = framåt (höger pil, innehållet sveper åt vänster),
 * -1 = bakåt, 0 = ingen riktning (start ↔ projekt) → mjuk toning istället.
 */
export type Direction = 1 | -1 | 0

/** Hur långt innehållet sveper i sidled. */
const SWIPE_DISTANCE = 72

/** Läser riktningen ur `location.state` som pilarna sätter. */
export const getDirection = (state: unknown): Direction => {
  const dir = (state as { dir?: unknown } | null | undefined)?.dir
  return dir === 1 || dir === -1 ? dir : 0
}

/**
 * Yttre sidövergång. Vid ett svep ligger opacity kvar på 1 — då står logotypen
 * still och rörelsen läses som ett svep, inte som en korsning av två toningar.
 * Vid riktningslöst byte (start ↔ projekt) tonar hela sidan istället.
 *
 * Ingen translateY här: på ett min-h-screen-element förlänger den scrollytan
 * under animationen och kan blinka fram en scrollbar.
 */
export const pageVariants: Variants = {
  initial: (dir: Direction) => ({ opacity: dir === 0 ? 0 : 1 }),
  enter: { opacity: 1, transition: { duration: 0.35, ease: EASE_OUT } },
  exit: (dir: Direction) => ({
    opacity: dir === 0 ? 0 : 1,
    transition: { duration: 0.2, ease: EASE_IN }
  })
}

/**
 * Förälder som orkestrerar innehållsblocken. Vid svep nollas staggern så att
 * blocken rör sig som en enda yta — en stagger skulle få dem att sepa isär.
 */
export const contentContainer: Variants = {
  hidden: {},
  show: (dir: Direction) => ({
    transition: {
      staggerChildren: dir === 0 ? 0.07 : 0,
      delayChildren: dir === 0 ? 0.08 : 0
    }
  })
}

/** Enskilt innehållsblock: sveper i sidled vid pilnavigering, annars uppåt. */
export const contentItem: Variants = {
  hidden: (dir: Direction) => (dir === 0 ? { opacity: 0, y: 12, x: 0 } : { opacity: 0, x: dir * SWIPE_DISTANCE, y: 0 }),
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
  exit: (dir: Direction) =>
    dir === 0
      ? { opacity: 0, y: -8, x: 0, transition: { duration: 0.2, ease: EASE_IN } }
      : { opacity: 0, x: dir * -SWIPE_DISTANCE, y: 0, transition: { duration: 0.24, ease: EASE_IN } }
}
