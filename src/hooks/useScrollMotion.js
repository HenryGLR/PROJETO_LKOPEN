import { useEffect } from 'react'

function useScrollMotion() {
  useEffect(() => {
    const root = document.documentElement
    const revealItems = document.querySelectorAll('[data-reveal]')
    const countItems = document.querySelectorAll('[data-count]')
    const hero = document.querySelector('.hero')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId

    if (!prefersReducedMotion) root.classList.add('has-motion')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = Number(entry.target.dataset.delay || 0)
          entry.target.style.transitionDelay = `${delay}ms`
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target
          const target = Number(element.dataset.count)
          const suffix = element.dataset.suffix || ''
          const duration = prefersReducedMotion ? 0 : 1300
          const start = performance.now()

          const updateCount = (time) => {
            const progress = duration === 0 ? 1 : Math.min((time - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            const value = Math.round(target * eased).toLocaleString('pt-BR')
            element.textContent = `${value}${suffix}`
            if (progress < 1) requestAnimationFrame(updateCount)
          }

          requestAnimationFrame(updateCount)
          countObserver.unobserve(element)
        })
      },
      { threshold: 0.55 },
    )

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
    } else {
      revealItems.forEach((item) => revealObserver.observe(item))
    }
    countItems.forEach((item) => countObserver.observe(item))

    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll-progress', String(maxScroll > 0 ? window.scrollY / maxScroll : 0))
      root.style.setProperty('--scroll-y', `${window.scrollY}px`)
      frameId = undefined
    }

    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateScroll)
    }

    const onPointerMove = (event) => {
      if (!hero || prefersReducedMotion) return
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      hero.style.setProperty('--pointer-x', x.toFixed(3))
      hero.style.setProperty('--pointer-y', y.toFixed(3))
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      root.classList.remove('has-motion')
      revealObserver.disconnect()
      countObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])
}

export default useScrollMotion
