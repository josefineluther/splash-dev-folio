/**
 * Sidans atmosfär: tre mycket svaga färgmoln som glider omkring bakom allt
 * innehåll. Kulörerna är mätta ur hero.webp, så stämningen är Josefines egen.
 *
 * Molnen är radial-gradient och inte blurrade element — en filter: blur() på
 * den här ytan är dyr, och en mjuk färgstopp ger samma intryck gratis. Bara
 * transform animeras, så lagret stannar hos kompositören och kostar inget
 * under scroll.
 *
 * Renderas i App utanför AnimatePresence: annars monteras lagret om vid varje
 * sidbyte och driften börjar om från noll.
 */
const clouds = [
  {
    className: 'animate-drift-a',
    style: {
      top: '-25%',
      left: '-15%',
      width: '85vmax',
      height: '85vmax',
      background: 'radial-gradient(circle at center, hsl(var(--coral) / 0.24), transparent 68%)'
    }
  },
  {
    className: 'animate-drift-b',
    style: {
      top: '10%',
      right: '-25%',
      width: '80vmax',
      height: '80vmax',
      background: 'radial-gradient(circle at center, hsl(var(--sky) / 0.19), transparent 68%)'
    }
  },
  {
    className: 'animate-drift-c',
    style: {
      bottom: '-30%',
      left: '15%',
      width: '95vmax',
      height: '95vmax',
      background: 'radial-gradient(circle at center, hsl(var(--periwinkle) / 0.21), transparent 70%)'
    }
  }
]

const AmbientGradient = () => (
  <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
    {clouds.map((cloud, i) => (
      <div
        key={i}
        className={`absolute rounded-full will-change-transform motion-reduce:animate-none ${cloud.className}`}
        style={cloud.style}
      />
    ))}
  </div>
)

export default AmbientGradient
