import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageTransition from '@/components/PageTransition'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <PageTransition className='flex min-h-screen items-center px-6 md:px-10'>
      <div>
        <p className='label text-ink-soft'>Not here</p>
        <h1 className='mt-6 font-display text-work font-bold'>This page doesn’t exist</h1>
        <p className='mt-6 max-w-measure text-body text-ink-soft'>
          The link may be out of date. Every work is on the start page.
        </p>
        <Link to='/' className='link-underline label mt-10 inline-block'>
          Back to start
        </Link>
      </div>
    </PageTransition>
  )
}

export default NotFound
