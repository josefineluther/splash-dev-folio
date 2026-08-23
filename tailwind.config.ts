import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        /* Syne formgavs för konsthallen Synesthésie. Den bär bara displaytexten
           — namnet, verktitlarna, de tre sektionsorden. Archivo bär allt annat. */
        display: ['Syne', 'Impact', 'sans-serif'],
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        paper: 'hsl(var(--paper))',
        ink: {
          DEFAULT: 'hsl(var(--ink))',
          soft: 'hsl(var(--ink-soft))'
        },
        hairline: 'hsl(var(--hairline))',
        coral: 'hsl(var(--coral))',
        rose: 'hsl(var(--rose))',
        periwinkle: 'hsl(var(--periwinkle))',
        sky: 'hsl(var(--sky))'
      },
      borderRadius: {
        plate: 'var(--radius)'
      },
      fontSize: {
        /* Namnet sätts inte här: hero har egen container-baserad storlek så att
           den längsta raden når marginalen. Se .name-line i index.css. */
        work: ['clamp(1.75rem, 4vw, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        section: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        /* Adressen är 25 tecken och delade tidigare skalsteg med verktitlarna,
           vilket sprängde vyporten vid 390 px. Eget steg med lägre golv. */
        contact: ['clamp(1.375rem, 4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        body: ['1rem', { lineHeight: '1.7' }],
        lead: ['clamp(1.0625rem, 1.5vw, 1.375rem)', { lineHeight: '1.55' }],
        /* Ledtexten i About, satt som väggtext nu när porträttet är borta. */
        walltext: ['clamp(1.375rem, 2.6vw, 2.125rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }]
      },
      maxWidth: {
        measure: '58ch'
      },
      keyframes: {
        /* Tre moln, tre olika långa varv, så att de aldrig synligt cyklar ihop.
           Bara transform animeras — molnen är radial-gradient och behöver ingen
           blur, så allt stannar hos kompositören. */
        'drift-a': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(12vw, 8vh, 0) scale(1.12)' },
          '66%': { transform: 'translate3d(-6vw, 14vh, 0) scale(0.94)' }
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '40%': { transform: 'translate3d(-14vw, -10vh, 0) scale(1.08)' },
          '75%': { transform: 'translate3d(9vw, 6vh, 0) scale(0.96)' }
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(10vw, -12vh, 0) scale(1.15)' }
        }
      },
      animation: {
        'drift-a': 'drift-a 70s ease-in-out infinite',
        'drift-b': 'drift-b 90s ease-in-out infinite',
        'drift-c': 'drift-c 110s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
