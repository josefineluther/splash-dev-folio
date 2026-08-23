import { useEffect } from 'react'

/** Väggens grundkulör, samma värde som --wall i index.css. */
export const WALL = '#B8B6B1'

const wantsReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Väggen tar ljus från verket som hänger framför dig: när ett verk är i vy
 * skiftar sidans bakgrund några procent mot verkets egen kulör.
 *
 * Kulören sätts som en CSS-variabel och blandningen sker i CSS, så att
 * övergången kan tonas av kompositören istället för att räknas om i JS
 * vid varje scrollhändelse.
 */
export const useWallTint = (tint: string, active: boolean) => {
  useEffect(() => {
    if (!active || wantsReducedMotion()) return
    document.documentElement.style.setProperty('--tint', tint)
  }, [tint, active])
}

/** Återställer väggen. Anropas när sidan lämnas, så att inte ett verks kulör följer med. */
export const resetWallTint = () => {
  document.documentElement.style.setProperty('--tint', WALL)
}
