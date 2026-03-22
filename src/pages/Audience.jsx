import { useEffect } from 'react'

const targets = [
  {
    icon: 'admin_panel_settings',
    label: 'IT Teams',
    desc: 'For teams managing laptop fleets and server rooms who need scalable, automated wiping proof.'
  },
  {
    icon: 'corporate_fare',
    label: 'Enterprises',
    desc: 'For global organizations that must meet strict GDPR and ESG requirements with a central dashboard.'
  },
  {
    icon: 'rocket_launch',
    label: 'Startups',
    desc: 'For growing companies that want to embed enterprise-grade security from day zero.'
  },
  {
    icon: 'precision_manufacturing',
    label: 'Refurbishers',
    desc: 'For third-party hardware handlers who want to issue a trusted certificate with every sale.'
  }
]

export default function Audience() {
  useEffect(() => {
    document.title = 'Audience | GTOS'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      <section style={{ padding: '8rem 2rem 4rem', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            marginBottom: '2rem',
            color: 'var(--on-surface)',
          }}>
            Built for the Ecosystem
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.25rem',
            color: 'var(--on-surface-variant)',
            maxWidth: '36rem',
            margin: '0 auto 6rem',
            lineHeight: 1.7,
          }}>
            GTOS provides the verification layer for everyone handling enterprise-grade hardware, 
            from small startups to global data centers.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
          }}>
            {targets.map(({ icon, label, desc }) => (
              <div key={label} style={{
                textAlign: 'center',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <div className="glass-3d animate-float" style={{
                  width: '120px', height: '120px',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem',
                  animationDelay: '0s',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '3.5rem', color: 'var(--secondary)' }}>{icon}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--on-surface)',
                }}>
                  {label}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  color: 'var(--on-surface-variant)',
                  lineHeight: 1.6,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY QUICK VIEW */}
      <section style={{ padding: '8rem 2rem', background: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--on-surface)' }}>Case Study: Global Financial Services</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--on-surface-variant)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              How a Fortune 500 company saved 70% in audit prep time by using GTOS certificates for their annual hardware disposal audit.
            </p>
            <button style={{
              padding: '0.8rem 2rem', border: '1px solid var(--primary)', borderRadius: '9999px',
              fontFamily: 'Space Grotesk, sans-serif', color: 'var(--primary)', background: 'transparent',
              fontWeight: 700, cursor: 'pointer',
            }}>Read the Case Study</button>
          </div>
          <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'Space Grotesk, sans-serif' }}>70%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Audit Prep Efficiency</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', fontFamily: 'Space Grotesk, sans-serif' }}>$1.2M</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Risk Avoidance (Annual)</div>
              </div>
            </div>
            <p style={{ fontStyle: 'italic', fontFamily: 'Inter, sans-serif', color: 'var(--on-surface)', lineHeight: 1.6 }}>
              "GTOS didn't just automate our wiping; it automated our compliance documentation. We went from manual spreadsheets 
              to a central source of truth for 12,000 assets per year."
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
