import { useRef, type CSSProperties } from 'react'
import { usePointerField } from '@/lib/pointerField'

/**
 * Sidans atmosfär: tre mycket svaga färgmoln bakom allt innehåll. Kulörerna är
 * mätta ur hero.webp, så stämningen är Josefines egen.
 *
 * Molnen gör två saker samtidigt. De glider på egna långa varv — det måste
 * finnas kvar, för telefoner har ingen pekare och fältet skulle annars stå
 * blickstilla där. Ovanpå driften lägger de en förskjutning mot pekaren.
 *
 * Därför två element per moln: driften är en CSS-animation på transform och
 * förskjutningen är också en transform, så de kan inte dela element — den
 * senare skulle skriva över den förra. Det yttre tar pekaren, det inre driver.
 *
 * Molnen är radial-gradient och inte blurrade element: filter: blur() på den
 * här ytan är dyrt, och en mjuk färgstopp ger samma intryck gratis.
 *
 * Renderas i App utanför AnimatePresence: annars monteras lagret om vid varje
 * sidbyte och både driften och fältet börjar om från noll.
 */
const clouds = [
  {
    /* Amplituden avtar bakåt. Lika stort utslag på alla tre skulle läsa som en
       enda klump fastklistrad vid pekaren; olika utslag läser som djup. */
    drift: 'animate-drift-a',
    box: { top: '-25%', left: '-15%', width: '85vmax', height: '85vmax' },
    tint: 'hsl(var(--coral) / 0.24)',
    stop: '68%',
    shift: { '--ax': '12vw', '--ay': '8vh', '--pxv': 'var(--px1, 0)', '--pyv': 'var(--py1, 0)' }
  },
  {
    drift: 'animate-drift-b',
    box: { top: '10%', right: '-25%', width: '80vmax', height: '80vmax' },
    tint: 'hsl(var(--sky) / 0.19)',
    stop: '68%',
    shift: { '--ax': '8vw', '--ay': '6vh', '--pxv': 'var(--px2, 0)', '--pyv': 'var(--py2, 0)' }
  },
  {
    drift: 'animate-drift-c',
    box: { bottom: '-30%', left: '15%', width: '95vmax', height: '95vmax' },
    tint: 'hsl(var(--periwinkle) / 0.21)',
    stop: '70%',
    shift: { '--ax': '5vw', '--ay': '4vh', '--pxv': 'var(--px3, 0)', '--pyv': 'var(--py3, 0)' }
  }
]

const AmbientGradient = () => {
  const layer = useRef<HTMLDivElement>(null)
  usePointerField(layer)

  return (
    <div ref={layer} aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className='absolute will-change-transform'
          style={
            {
              ...cloud.box,
              ...cloud.shift,
              transform: 'translate3d(calc(var(--pxv) * var(--ax)), calc(var(--pyv) * var(--ay)), 0)'
            } as CSSProperties
          }
        >
          <div
            className={`h-full w-full rounded-full will-change-transform motion-reduce:animate-none ${cloud.drift}`}
            style={{ background: `radial-gradient(circle at center, ${cloud.tint}, transparent ${cloud.stop})` }}
          />
        </div>
      ))}
    </div>
  )
}

export default AmbientGradient
