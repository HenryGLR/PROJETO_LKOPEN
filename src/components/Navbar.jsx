import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'
import '../styles/navbar.css'

const links = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Edições', href: '/edicoes' },
  { label: 'Categorias', href: '/categorias' },
  { label: 'Galeria', href: '/galeria' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash)
  const closeMenu = () => setIsMenuOpen(false)
  const currentPath = window.location.pathname
  const isLinkActive = (href) => {
    if (href === '/edicoes') return currentPath.startsWith('/edicoes')
    if (href.startsWith('/#')) {
      const targetHash = href.slice(1)
      if (currentPath !== '/') return false
      return targetHash === '#inicio' ? !currentHash || currentHash === '#inicio' : currentHash === targetHash
    }
    return currentPath === href
  }

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="navbar">
      <a className="navbar__brand" href="/#inicio" onClick={closeMenu} aria-label="LK Open — início">
        <BrandLogo compact />
      </a>

      <button
        className={`navbar__toggle${isMenuOpen ? ' navbar__toggle--open' : ''}`}
        type="button"
        aria-label={`${isMenuOpen ? 'Fechar' : 'Abrir'} menu de navegação`}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="main-navigation"
        className={`navbar__menu${isMenuOpen ? ' navbar__menu--open' : ''}`}
        aria-label="Navegação principal"
      >
        {links.map((link) => {
          const isActive = isLinkActive(link.href)

          return (
            <a
              className={isActive ? 'navbar__link--active' : ''}
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              onClick={closeMenu}
              key={link.href}
            >
              {link.label}
            </a>
          )
        })}
        <a
          className={`navbar__sponsor${currentPath === '/patrocinio' ? ' navbar__sponsor--active' : ''}`}
          href="/patrocinio"
          aria-current={currentPath === '/patrocinio' ? 'page' : undefined}
          onClick={closeMenu}
        >
          Patrocínio <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default Navbar
