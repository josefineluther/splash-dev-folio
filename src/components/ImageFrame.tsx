import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ImageFrameProps {
  src: string
  alt: string
  /** Sätt på bilder som syns direkt vid sidladdning. Stänger av lazy-load. */
  priority?: boolean
  className?: string
}

/**
 * Bild med platshållare medan den laddar. Sidan är bildtung, så platshållaren
 * håller layouten stilla och tonar sedan in bilden istället för att låta den
 * poppa in halvfärdig.
 *
 * Platshållaren är en platt, tom ram — ingen skimrande strimma. Ett galleri
 * har inga laddningsanimationer på väggen.
 *
 * Formatet sätts av föräldern (aspect-*), inte här.
 */
const ImageFrame = ({ src, alt, priority = false, className }: ImageFrameProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const seenSrc = useRef(src)
  const [loaded, setLoaded] = useState(false)

  /**
   * En cachad bild kan vara färdigladdad innan React hinner koppla onLoad, och
   * då kommer load-eventet aldrig. Ref-callbacken körs i samma commit som
   * elementet skapas och är därför tidigaste tillfället att upptäcka det.
   */
  const attachRef = useCallback((node: HTMLImageElement | null) => {
    imgRef.current = node
    if (node?.complete && node.naturalWidth > 0) setLoaded(true)
  }, [])

  // Nollställ BARA när src faktiskt byts. Ett villkorslöst setLoaded(false) här
  // skulle slå tillbaka ett `loaded` som onLoad eller ref-callbacken redan hunnit
  // sätta, och låsa bilden på opacity-0 för alltid.
  useEffect(() => {
    if (seenSrc.current !== src) {
      seenSrc.current = src
      setLoaded(false)
    }

    const node = imgRef.current
    if (node?.complete && node.naturalWidth > 0) setLoaded(true)
  }, [src])

  return (
    <div className={cn('relative overflow-hidden bg-black/[0.06]', className)}>
      <img
        ref={attachRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding='async'
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700 ease-out',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}

export default ImageFrame
