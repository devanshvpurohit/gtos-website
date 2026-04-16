import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO = '/gtos-logo.png'

const navLinks = [
  { to: '/problem', label: 'Problem' },
  { to: '/vision', label: 'Vision' },
  { to: '/features', label: 'Features' },
  { to: '/audience', label: 'Audience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(19,19,20,0.92)'
          : 'rgba(19,19,20,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(66,71,84,0.2)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src={LOGO}
            alt="GTOS Logo"
            style={{
              height: '40px',
              width: '40px',
              objectFit: 'cover',
              borderRadius: '50%',
              filter: 'drop-shadow(0 0 6px rgba(173,198,255,0.4))',
              border: '1px solid rgba(0,210,255,0.2)',
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: location.pathname === to
                  ? 'var(--secondary)'
                  : 'rgba(229,226,227,0.7)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                borderBottom: location.pathname === to
                  ? '1px solid var(--secondary)'
                  : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/waitlist"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'var(--on-primary)',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.875rem',
              textDecoration: 'none',
              cursor: 'pointer',
              border: 'none',
              display: 'inline-block',
            }}
            className="glow-button"
          >
            Join Waitlist
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--on-surface)',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(19,19,20,0.98)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(66,71,84,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                color: location.pathname === to ? 'var(--secondary)' : 'rgba(229,226,227,0.8)',
                textDecoration: 'none',
                fontSize: '1.1rem',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/waitlist"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'var(--on-primary)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Join Waitlist
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
