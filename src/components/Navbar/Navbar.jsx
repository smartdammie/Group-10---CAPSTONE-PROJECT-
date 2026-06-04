import { useState } from 'react'
import graphicsImg from '../../assets/graphics.png'
import './Navbar.css'

function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          <img src={graphicsImg} alt="Phoenix logo" className="navbar__logo-img" />
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <a href="#" className="navbar__link" onClick={closeMenu}>Home</a>
          <a href="#planets" className="navbar__link" onClick={closeMenu}>Planets</a>
          <a href="#data-table" className="navbar__link" onClick={closeMenu}>Data</a>
          <a
            href="#contact"
            className="navbar__link navbar__link--cta"
            onClick={(e) => { e.preventDefault(); onContactClick(); closeMenu() }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
