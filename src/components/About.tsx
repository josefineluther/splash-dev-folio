import Reveal from '@/components/Reveal'

/** Verktygen bor här, en rad, istället för i en egen sektion. */
const facts = [
  ['Based in', 'Gothenburg, Sweden'],
  ['Studied', 'Frontend development, IT-Högskolan'],
  ['And', 'BA media & communication, Uppsala'],
  ['Works in', 'TypeScript, React, SvelteKit, Node, PostgreSQL, Figma']
]

/**
 * Ingen bild här. Ledtexten är satt stort som väggtext istället, så att
 * sektionen bär sin egen tyngd utan ett porträtt.
 */
const About = () => (
  <section className='px-6 py-24 md:px-10 md:py-40'>
    <Reveal>
      <h2 id='about' className='scroll-mt-24 font-display text-section font-semibold'>About</h2>
    </Reveal>

    <div className='mt-16 grid grid-cols-12 gap-6 md:mt-24'>
      <Reveal className='col-span-12 md:col-span-8'>
        <p className='max-w-[46ch] text-walltext'>
          Hi, I’m Josefine — a fullstack developer with a background in UI design and communication.
        </p>
      </Reveal>

      <Reveal delay={0.1} className='col-span-12 md:col-span-5'>
        <div className='max-w-measure space-y-5 text-body text-ink-soft'>
          <p>
            I studied frontend development at IT-Högskolan in Gothenburg and hold a bachelor’s degree in media and
            communication studies from Uppsala University. My strength lies in combining the technical with the
            communicative, resulting in digital experiences with a focus on UX and usability.
          </p>

          <p>When I’m not coding, I enjoy crocheting, singing, running and spending time with my family, friends and my cat.</p>
        </div>
      </Reveal>

      <Reveal delay={0.15} className='col-span-12 md:col-start-7 md:col-span-6'>
        {/* Måttet hindrar hårstrecken från att löpa ut i tomrum: raderna satt
            i sex kolumner medan innehållet behövde drygt hälften. */}
        <dl className='max-w-xl'>
          {facts.map(([term, value]) => (
            <div key={term} className='flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:gap-8'>
              <dt className='label text-ink-soft sm:w-24 sm:shrink-0'>{term}</dt>
              <dd className='text-body'>{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
)

export default About
