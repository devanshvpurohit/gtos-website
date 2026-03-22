import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '40%', label: 'of refurbished hardware still contains recoverable data', color: 'var(--error)' },
  { value: '68%', label: 'of IT teams have no hardware disposal audit trail', color: 'var(--primary)' },
  { value: '$4.9M', label: 'average cost of a data breach in 2024 (IBM)', color: 'var(--secondary)' },
]

const risks = [
  {
    icon: 'security_update_warning',
    title: 'Prevent Attacks',
    body: 'Stopping external breaches is only half the battle. Hardware integrity is the final frontier — and almost every security stack ignores it.',
  },
  {
    icon: 'radar',
    title: 'Detect Threats',
    body: 'Most platforms miss the risk of "zombie data" residing in discarded corporate devices sold on open markets without proper sanitization.',
  },
  {
    icon: 'gpp_bad',
    title: 'Compliance Gaps',
    body: 'GDPR, HIPAA, and NIST all require data destruction proof. Yet most organizations can\'t produce a single certificate for hardware disposal.',
  },
  {
    icon: 'memory',
    title: 'Shadow Hardware',
    body: 'Untracked, discarded assets that resurface with residual data are a growing attack surface entirely invisible to traditional SIEM tools.',
  },
]

export default function Problem() {
  useEffect(() => {
    document.title = 'The Problem | GTOS'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      {/* HERO */}
      <section style={{
        padding: '6rem 2rem 4rem',
        background: 'var(--surface-container-low)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Red ambient glow */}
        <div style={{
          position: 'absolute',
          top: '-100px', left: '50%',
          width: '600px', height: '600px',
          marginLeft: '-300px',
          background: 'rgba(255,180,171,0.04)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '56rem' }}>
            {/* Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(255,180,171,0.08)',
              border: '1px solid rgba(255,180,171,0.2)',
              marginBottom: '2rem',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--error)', display: 'inline-block' }} />
              <span style={{ color: 'var(--error)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                Critical Gap Found
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '1.5rem',
              color: 'var(--on-surface)',
            }}>
              The Invisible Risk
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.2rem',
              color: 'var(--on-surface-variant)',
              lineHeight: 1.7,
              maxWidth: '44rem',
            }}>
              Traditional security focuses on the perimeter. But what happens when the hardware
              leaves the building? The answer is alarming — and almost no one is prepared.
            </p>
          </div>
        </div>
      </section>

      {/* STAT CARDS */}
      <section style={{ padding: '4rem 2rem', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {stats.map(({ value, label, color }) => (
              <div key={value} style={{
                padding: '2rem',
                borderRadius: '1.5rem',
                background: 'var(--surface-container-highest)',
                border: `1px solid ${color}22`,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '120px', height: '120px',
                  background: color,
                  opacity: 0.04,
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                }} />
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color,
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}>
                  {value}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: 1.5 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN PROBLEM SECTION */}
      <section style={{ padding: '6rem 2rem', background: 'var(--surface-container-low)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            {/* Left column */}
            <div>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: '2rem',
                color: 'var(--on-surface)',
              }}>
                Four Dimensions of the Gap
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                color: 'var(--on-surface-variant)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '3rem',
              }}>
                The hardware data risk isn't a single failure — it's a systemic blind spot across prevention,
                detection, compliance, and asset visibility.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {risks.map(({ icon, title, body }) => (
                  <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px', height: '48px',
                      borderRadius: '0.75rem',
                      background: 'var(--surface-container-highest)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>{icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--on-surface)' }}>
                        {title}
                      </h4>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — main callout card */}
            <div>
              <div style={{
                padding: '3rem',
                borderRadius: '2rem',
                background: 'var(--surface-container-highest)',
                border: '1px solid rgba(255,180,171,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner badge */}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  padding: '0.2rem 0.75rem',
                  background: 'rgba(255,180,171,0.1)',
                  color: 'var(--error)',
                  fontSize: '0.65rem',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,180,171,0.2)',
                }}>
                  Ignored Reality
                </span>

                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--error)',
                  marginBottom: '1.5rem',
                  marginTop: '1.5rem',
                  lineHeight: 1.2,
                }}>
                  Discarded devices still contain your data.
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'var(--on-surface-variant)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  fontSize: '0.95rem',
                }}>
                  Up to 40% of refurbished hardware sold on open markets still contains recoverable
                  sensitive enterprise information. This isn't just a threat; it's a legal liability.
                </p>

                {/* Quote */}
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--surface-container-low)',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid var(--error)',
                  marginBottom: '2rem',
                }}>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', color: 'var(--error)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                    Industry Expert
                  </span>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '1rem', fontStyle: 'italic', color: 'var(--on-surface)', lineHeight: 1.6 }}>
                    "Device disposal risk is the most overlooked vector in modern ESG and security compliance."
                  </p>
                </div>

                {/* Timeline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Device is decommissioned by IT',
                    'Sent to external refurbisher',
                    'Listed on open market',
                    'Data recovered by bad actor',
                  ].map((step, i) => (
                    <div key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{
                        width: '28px', height: '28px',
                        borderRadius: '50%',
                        background: i === 3 ? 'rgba(255,180,171,0.15)' : 'var(--surface-container)',
                        border: `1px solid ${i === 3 ? 'var(--error)' : 'rgba(66,71,84,0.3)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.7rem',
                        color: i === 3 ? 'var(--error)' : 'var(--on-surface-variant)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 700,
                      }}>
                        {i + 1}
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        fontFamily: 'Inter, sans-serif',
                        color: i === 3 ? 'var(--error)' : 'var(--on-surface-variant)',
                        fontWeight: i === 3 ? 600 : 400,
                      }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: 'var(--surface)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
            color: 'var(--on-surface)',
          }}>
            Ready to close the gap?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--on-surface-variant)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            GTOS solves exactly this. See how our proof-based platform eliminates hardware data risk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/vision" style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'var(--on-primary)',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              textDecoration: 'none',
            }} className="glow-button">
              See Our Vision →
            </Link>
            <Link to="/waitlist" style={{
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              border: '1px solid rgba(66,71,84,0.4)',
              color: 'var(--on-surface)',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              textDecoration: 'none',
              background: 'transparent',
            }}>
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
