import { useEffect, type RefObject } from 'react'

/**
 * Hur snabbt varje moln söker sig mot pekaren. Olika värden ger djup: det
 * närmaste molnet hinner först, de bakre släpar efter. Följer molnen pekaren
 * exakt känns det billigt och ryckigt — eftersläpningen är hela effekten.
 */
const STIFFNESS = [0.09, 0.06, 0.04]

/** Under det här avståndet är rörelsen omärklig och loopen kan sluta snurra. */
const SETTLED = 0.0005

/**
 * Skriver pekarens läge som CSS-variabler på ett element: --px1/--py1 till
 * --px3/--py3, normaliserade till -1..1 från vyportens mitt. CSS fördelar
 * sedan värdena till varje moln med sin egen amplitud.
 *
 * Medvetet utan React-state: att lägga pekarläget i state renderar om trädet
 * vid varje musrörelse. Här skriver en enda rAF-loop rakt på DOM-noden, så
 * komponenten renderas aldrig om.
 */
export const usePointerField = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Touchenheter har ingen pekare, och vid reducerad rörelse ska fältet stå
    // stilla. I båda fallen kopplas ingen lyssnare alls.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || still.matches) return

    const target = { x: 0, y: 0 }
    const current = STIFFNESS.map(() => ({ x: 0, y: 0 }))
    let frame = 0

    const write = () => {
      let moving = false

      current.forEach((c, i) => {
        c.x += (target.x - c.x) * STIFFNESS[i]
        c.y += (target.y - c.y) * STIFFNESS[i]
        if (Math.abs(target.x - c.x) > SETTLED || Math.abs(target.y - c.y) > SETTLED) moving = true
        el.style.setProperty(`--px${i + 1}`, c.x.toFixed(4))
        el.style.setProperty(`--py${i + 1}`, c.y.toFixed(4))
      })

      // Sluta snurra när fältet landat. En rAF-loop som aldrig tar slut kostar
      // batteri för ingenting; nästa pekarrörelse startar den igen.
      frame = moving ? requestAnimationFrame(write) : 0
    }

    const start = () => {
      if (!frame) frame = requestAnimationFrame(write)
    }

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
      start()
    }

    /** Pekaren lämnar fönstret: fältet söker sig tillbaka mot mitten. */
    const onLeave = () => {
      target.x = 0
      target.y = 0
      start()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerout', onLeave, { passive: true })
    window.addEventListener('blur', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onLeave)
      window.removeEventListener('blur', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])
}
