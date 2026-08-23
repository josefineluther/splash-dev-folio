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
        wall: 'hsl(var(--wall))',
        ink: {
          DEFAULT: 'hsl(var(--ink))',
          soft: 'hsl(var(--ink-soft))'
        },
        hairline: 'hsl(var(--hairline))'
      },
      fontSize: {
        /* Namnet sätts inte här: raderna i hero har egna vw-storlekar så att
           båda spänner hela vyportbredden. Se Hero. */
        work: ['clamp(1.75rem, 4vw, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        section: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        /* Adressen är 25 tecken och delade tidigare skalsteg med verktitlarna,
           vilket sprängde vyporten vid 390 px. Eget steg med lägre golv. */
        contact: ['clamp(1.375rem, 4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        body: ['1rem', { lineHeight: '1.7' }],
        lead: ['clamp(1.0625rem, 1.5vw, 1.375rem)', { lineHeight: '1.5' }]
      },
      maxWidth: {
        measure: '58ch'
      },
    }
  },
  plugins: []
} satisfies Config
