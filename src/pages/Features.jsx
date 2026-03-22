import { useEffect } from 'react'

const features = [
  {
    icon: 'sanitizer',
    title: 'Secure Device Wiping',
    desc: 'NIST 800-88 compliant sanitization protocols that ensure zero byte-level recovery potential on all storage media.',
    color: 'var(--primary)'
  },
  {
    icon: 'task',
    title: 'Proof Certificates',
    desc: 'Cryptographically signed digital twins of every sanitized device, ready for your compliance auditing teams.',
    color: 'var(--secondary)'
  },
  {
    icon: 'query_stats',
    title: 'Trust Scoring',
    desc: 'Dynamic reputation scores for organizational hardware security posture, giving you ESG-ready impact data.',
    color: 'var(--primary)'
  },
  {
    icon: 'android_fingerprint',
    title: 'AI Risk Detection',
    desc: 'AI-driven monitoring of shadow hardware assets that might have entered or left your ecosystem without tracking.',
    color: 'var(--secondary)'
  },
  {
    icon: 'cloud_sync',
    title: 'Real-time Sync',
    desc: 'Instant cloud synchronization of sanitization status across your entire global enterprise location footprint.',
    color: 'var(--primary)'
  },
  {
    icon: 'api',
    title: 'Open API',
    desc: 'Integrate GTOS directly into your existing ITAM and SIEM workflows for automated workflow management.',
    color: 'var(--secondary)'
  }
]

export default function Features() {
  useEffect(() => {
    document.title = 'Features | GTOS'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      <section style={{ padding: '8rem 2rem 4rem', background: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px', marginBottom: '6rem' }}>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '2rem',
              color: 'var(--on-surface)',
            }}>
              Engineered Intelligence
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              color: 'var(--on-surface-variant)',
              lineHeight: 1.7,
            }}>
              Four pillars of the GTOS ecosystem designed to redefine how organizations 
              handle the entire lifecycle of their hardware assets.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map(({ icon, title, desc, color }) => (
              <div key={title} className="glass-card" style={{
                padding: '3rem',
                borderRadius: '2rem',
                border: `1px solid ${color}15`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  background: `${color}10`,
                  border: `1px solid ${color}30`,
                  borderRadius: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2rem', color }}>{icon}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--on-surface)',
                  letterSpacing: '-0.02em',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  color: 'var(--on-surface-variant)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}>
                  {desc}
                </p>
                <div style={{ height: '4px', width: '40px', background: color, borderRadius: '4px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section style={{ padding: '8rem 2rem', background: 'var(--surface)', textAlign: 'center' }}>
        <p style={{ color: 'var(--outline)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '3rem' }}>
          Industry Compliant Protocols
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
          opacity: 0.5,
          filter: 'grayscale(1)',
        }}>
          {['NIST 800-88', 'GDPR Article 17', 'HIPAA 164', 'ISO 27001', 'SOC 2 Type II'].map(name => (
            <span key={name} style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--on-surface)',
            }}>
              {name}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
