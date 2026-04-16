import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    document.title = 'GTOS | Global Trust Operating System'

    const handleMouseMove = (e) => {
      if (!visualRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 15
      const moveY = (clientY - innerHeight / 2) / innerHeight * 15
      
      visualRef.current.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="hero-gradient"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '5rem',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Text Side */}
          <div style={{ zIndex: 10 }} className="animate-fade-in-up">
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(221,183,255,0.08)',
              border: '1px solid rgba(221,183,255,0.2)',
              marginBottom: '2rem',
            }}>
              <span className="badge-dot" />
              <span style={{
                color: 'var(--secondary)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
              }}>
                Next-Gen Verification
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              marginBottom: '2rem',
              color: 'var(--on-surface)',
            }}>
              Cybersecurity<br />is About<br />to Change
            </h1>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--on-surface-variant)',
              maxWidth: '36rem',
              marginBottom: '3rem',
              lineHeight: 1.7,
            }}>
              Proof-based cybersecurity platform where data destruction is verifiable, not assumed.
              Eliminate the phantom risk of legacy hardware.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <Link
                to="/waitlist"
                className="glow-button"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  color: 'var(--on-primary)',
                  padding: '1rem 2.5rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Join Early Access Waitlist
              </Link>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                background: 'rgba(53,52,54,0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(66,71,84,0.2)',
                color: 'var(--on-surface)',
                fontWeight: 700,
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}>
                <span className="material-symbols-outlined">chat</span>
                Join via WhatsApp
              </button>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '4rem',
              flexWrap: 'wrap',
            }}>
              {[
                { num: '84+', label: 'Companies waiting' },
                { num: '40%', label: 'Data recovery rate on retired hardware' },
                { num: '100', label: 'Early access spots' },
              ].map(({ num, label }) => (
                <div key={num}>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{num}</div>
                  <div style={{
                    color: 'var(--on-surface-variant)',
                    fontSize: '0.75rem',
                    fontFamily: 'Inter, sans-serif',
                    maxWidth: '120px',
                    lineHeight: 1.4,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Visual Side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              ref={visualRef}
              className="threed-object-wrap" 
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '500px', 
                aspectRatio: '1',
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Outer glow */}
               <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,210,255,0.1)',
                filter: 'blur(100px)',
                borderRadius: '50%',
              }} className="animate-pulse-slow" />

              {/* Monolith / Logo Wrapper */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '240px', height: '240px',
                zIndex: 20,
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  <img
                    src="/gtos-logo.png"
                    alt="GTOS Logo"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 0 30px rgba(0,210,255,0.4))',
                    }}
                  />
                </div>
              </div>

              {/* Orbiting rings */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '320px', height: '320px',
                marginTop: '-160px', marginLeft: '-160px',
                border: '2px solid rgba(0,210,255,0.15)',
                borderRadius: '50%',
              }} className="animate-spin-slow" />
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '240px', height: '240px',
                marginTop: '-120px', marginLeft: '-120px',
                border: '1px solid rgba(58,123,213,0.2)',
                borderRadius: '50%',
              }} className="animate-spin-reverse" />

              {/* Floating data bits */}
              <div style={{
                position: 'absolute', top: '15%', left: '10%',
                width: '16px', height: '16px',
                background: 'var(--primary)',
                borderRadius: '4px',
                boxShadow: '0 0 20px var(--primary)',
              }} className="animate-float" />
              <div style={{
                position: 'absolute', top: '55%', right: '8%',
                width: '12px', height: '12px',
                background: 'var(--secondary)',
                borderRadius: '4px',
                boxShadow: '0 0 20px var(--secondary)',
                animationDelay: '2s',
              }} className="animate-float" />
              <div style={{
                position: 'absolute', bottom: '20%', left: '42%',
                width: '20px', height: '20px',
                background: 'rgba(255,255,255,0.4)',
                borderRadius: '50%',
                filter: 'blur(2px)',
                animationDelay: '1s',
              }} className="animate-float" />

              {/* Info tags */}
              <div className="info-tag animate-float" style={{
                position: 'absolute',
                top: '5%', right: '-5%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>security</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>System Verified</span>
                </div>
              </div>
              <div className="info-tag animate-float" style={{
                position: 'absolute',
                bottom: '10%', left: '-8%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                animationDelay: '3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>verified</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>Proof Issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION SECTION */}
      <section style={{
        padding: '5rem 2rem',
        background: 'var(--surface-container-low)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <p style={{
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--outline)',
            marginBottom: '3rem',
          }}>
            Explore GTOS
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { to: '/problem', icon: 'security_update_warning', label: 'The Problem', desc: 'Understand the invisible data risk lurking in discarded hardware.' },
              { to: '/vision', icon: 'verified', label: 'Our Vision', desc: 'A new standard where trust is replaced by cryptographic proof.' },
              { to: '/features', icon: 'query_stats', label: 'Platform Features', desc: 'NIST-compliant wiping, proof certificates, AI risk detection.' },
              { to: '/audience', icon: 'admin_panel_settings', label: 'Built For You', desc: 'IT teams, enterprises, startups, and refurbishers.' },
            ].map(({ to, icon, label, desc }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  padding: '1.75rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(66,71,84,0.15)',
                  background: 'rgba(53,52,54,0.08)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="glass-card"
              >
                <span className="material-symbols-outlined" style={{
                  color: 'var(--primary)',
                  fontSize: '2rem',
                  display: 'block',
                  marginBottom: '1rem',
                }}>
                  {icon}
                </span>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--on-surface)',
                  marginBottom: '0.5rem',
                }}>
                  {label}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: 'var(--on-surface-variant)',
                  lineHeight: 1.6,
                }}>
                  {desc}
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: 'var(--primary)',
                  fontSize: '0.8rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                }}>
                  Learn more
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section style={{
        padding: '6rem 2rem',
        background: 'var(--surface)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="gradient-text-fade" style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 1,
            marginBottom: '1.5rem',
          }}>
            The Future is Verifiable
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            color: 'var(--on-surface-variant)',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            lineHeight: 1.7,
          }}>
            Only 100 companies will be part of our founding cohort. Be one of them.
          </p>
          <Link to="/waitlist" className="glow-button" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'var(--on-primary)',
            padding: '1rem 3rem',
            borderRadius: '9999px',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '1.1rem',
            textDecoration: 'none',
          }}>
            Join Early Access Waitlist →
          </Link>
        </div>
      </section>
    </main>
  )
}
