import { useEffect } from 'react'

const BASE = 'Josefine Luther — Fullstack developer'

/**
 * Sätter sidans titel och beskrivning per verk. Utan detta heter varje
 * projektsida samma sak, vilket syns i flikar, bokmärken och delade länkar.
 * Återställs när sidan lämnas, så att startsidan får tillbaka sin egen titel.
 */
export const useDocumentTitle = (title?: string, description?: string) => {
  useEffect(() => {
    /* Verktitlarna kan bära mjuka bindestreck för radbrytning i rubriken.
       De hör inte hemma i flikar, bokmärken eller delade länkar. */
    const plain = title?.replace(/\u00AD/g, '')
    document.title = plain ? `${plain} — Josefine Luther` : BASE

    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      const previous = meta?.getAttribute('content')
      meta?.setAttribute('content', description)
      return () => {
        document.title = BASE
        if (previous) meta?.setAttribute('content', previous)
      }
    }

    return () => {
      document.title = BASE
    }
  }, [title, description])
}
