import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Vision() {
  useEffect(() => {
    document.title = 'Vision | GTOS'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      <section style={{
        padding: '8rem 2rem 6rem',
        textAlign: 'center',
        background: 'var(--surface)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow behind title */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px',
          background: 'rgba(173,198,255,0.05)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            marginBottom: '2rem',
            color: 'var(--on-surface)',
          }}>
            A New Standard<br />of <span className="gradient-text">Trust</span>
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.25rem',
            color: 'var(--on-surface-variant)',
            maxWidth: '40rem',
            margin: '0 auto 4rem',
            lineHeight: 1.7,
          }}>
            We believe that in a world of complex hardware supply chains, trust should never be assumed. 
            It must be cryptographically proven.
          </p>

          {/* Interactive Flow Visual */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            md: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            padding: '4rem 0',
          }} className="vision-flow">
            {/* Step 1 */}
            <div style={{ textAlign: 'center', width: '200px' }}>
              <div className="glass-3d animate-float" style={{
                width: '120px', height: '120px',
                margin: '0 auto 1.5rem',
                borderRadius: '1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--outline)' }}>laptop_mac</span>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>Device Detected</span>
            </div>

            {/* Arrow/Line */}
            <div style={{ flex: 1, height: '2px', background: 'rgba(66,71,84,0.3)', minWidth: '100px', position: 'relative' }} className="flow-line">
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '30%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} className="shimmer-line" />
            </div>

            {/* Step 2 (Verification Core) */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '180px', height: '180px',
                borderRadius: '50%',
                background: 'rgba(173,198,255,0.1)',
                border: '1px solid var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
                position: 'relative',
              }} className="animate-pulse-slow">
                <div style={{ position: 'absolute', inset: -15, border: '1px dashed var(--primary)', borderRadius: '50%' }} className="animate-spin-slow" />
                <span className="material-symbols-outlined" style={{ fontSize: '5rem', color: 'var(--primary)', fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)' }}>Verification Process</span>
            </div>

            {/* Arrow/Line */}
            <div style={{ flex: 1, height: '2px', background: 'rgba(66,71,84,0.3)', minWidth: '100px' }} className="flow-line" />

            {/* Step 3 */}
            <div style={{ textAlign: 'center', width: '200px' }}>
              <div className="glass-3d animate-float" style={{
                width: '120px', height: '120px',
                margin: '0 auto 1.5rem',
                borderRadius: '1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animationDelay: '1s',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--secondary)' }}>workspace_premium</span>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>Immutable Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '8rem 2rem', background: 'var(--surface-container-low)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>No Trust. Only Proof.</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, color: 'var(--on-surface-variant)' }}>
                GTOS removes the "human promise" from security. We don't ask you to believe that a hard drive was wiped; 
                we give you a cryptographically signed receipt that proves it was, down to the final bit.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--secondary)' }}>Asset Integrity First.</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, color: 'var(--on-surface-variant)' }}>
                Your security is only as strong as your weakest physical link. GTOS treats every decommissioned laptop, 
                server, or smartphone as a potential data breach until it is proven dead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .vision-flow { flex-direction: column !important; }
          .flow-line { height: 60px !important; width: 2px !important; min-width: auto !important; margin: 1rem 0; }
        }
      `}</style>
    </main>
  )
}
