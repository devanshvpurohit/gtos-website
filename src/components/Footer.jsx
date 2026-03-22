import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#1c1b1c',
      width: '100%',
      padding: '3rem 2rem',
      position: 'relative',
      zIndex: 20,
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--on-surface)',
              textDecoration: 'none',
              letterSpacing: '-0.05em',
            }}>
              GTOS
            </Link>
            <p style={{ color: 'rgba(229,226,227,0.4)', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif', maxWidth: '260px', lineHeight: 1.6 }}>
              Global Trust Operating System — making hardware security verifiable, not assumed.
            </p>
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { to: '/problem', label: 'Problem' },
              { to: '/vision', label: 'Vision' },
              { to: '/features', label: 'Features' },
              { to: '/audience', label: 'Audience' },
              { to: '/waitlist', label: 'Waitlist' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  color: 'rgba(229,226,227,0.5)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  letterSpacing: '0.03em',
                  padding: '0.25rem 0.5rem',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--on-surface)'}
                onMouseLeave={e => e.target.style.color = 'rgba(229,226,227,0.5)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Privacy Policy', 'Terms of Service', 'Security', 'Status'].map(label => (
              <a
                key={label}
                href="#"
                style={{
                  color: 'rgba(229,226,227,0.5)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--on-surface)'}
                onMouseLeave={e => e.target.style.color = 'rgba(229,226,227,0.5)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(66,71,84,0.3)' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(229,226,227,0.35)', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
            © 2024 Global Trust Operating System. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              padding: '0.25rem 0.75rem',
              border: '1px solid rgba(173,198,255,0.2)',
              borderRadius: '9999px',
              color: 'rgba(173,198,255,0.6)',
              fontSize: '0.7rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              NIST 800-88
            </span>
            <span style={{
              padding: '0.25rem 0.75rem',
              border: '1px solid rgba(221,183,255,0.2)',
              borderRadius: '9999px',
              color: 'rgba(221,183,255,0.6)',
              fontSize: '0.7rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              SOC 2
            </span>
            <span style={{
              padding: '0.25rem 0.75rem',
              border: '1px solid rgba(173,198,255,0.2)',
              borderRadius: '9999px',
              color: 'rgba(173,198,255,0.6)',
              fontSize: '0.7rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              ISO 27001
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
