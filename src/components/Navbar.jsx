import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">saksham<span>.dev</span></div>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link}`} className={active === link ? 'active' : ''}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <a key={link} href={`#${link}`} onClick={closeMenu}>
            {link}
          </a>
        ))}
      </div>
    </>
  )
}
