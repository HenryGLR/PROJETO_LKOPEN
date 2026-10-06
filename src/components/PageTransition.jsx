import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'
import '../styles/page-transition.css'

function PageTransition() {
  const [phase, setPhase] = useState('entering')
  const [origin, setOrigin] = useState({ x: '50vw', y: '50vh' })

  useEffect(() => {
    const firstFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase('ready'))
    })

    const handleNavigation = (event) => {
      const anchor = event.target.closest('a[href]')
      if (!anchor || event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return

      const url = new URL(anchor.href, window.location.href)
      if (!['http:', 'https:'].includes(url.protocol) || url.origin !== window.location.origin) return

      const sameDocument = url.pathname === window.location.pathname && url.search === window.location.search
      if (sameDocument) return

      event.preventDefault()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.location.assign(url.href)
        return
      }

      setOrigin({ x: `${event.clientX}px`, y: `${event.clientY}px` })
      setPhase('leaving')
      document.body.classList.add('is-page-leaving')

      window.setTimeout(() => window.location.assign(url.href), 720)
    }

    document.addEventListener('click', handleNavigation)

    return () => {
      cancelAnimationFrame(firstFrame)
      document.removeEventListener('click', handleNavigation)
      document.body.classList.remove('is-page-leaving')
    }
  }, [])

  return (
    <div
      className={`page-transition page-transition--${phase}`}
      style={{ '--click-x': origin.x, '--click-y': origin.y }}
      aria-hidden="true"
    >
      <div className="page-transition__pulse" />
      <div className="page-transition__brand">
        <BrandLogo />
      </div>
      <small>Futevôlei · São Paulo</small>
    </div>
  )
}

export default PageTransition
