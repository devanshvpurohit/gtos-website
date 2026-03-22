import { useState, useEffect } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [size, setSize] = useState('1-50 employees')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Join Waitlist | GTOS'
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      <section style={{ padding: '8rem 2rem', background: 'var(--surface-container-low)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Glow behind title */}
        <div style={{
          position: 'absolute',
          top: '30%', right: '-200px',
          width: '600px', height: '600px',
          background: 'rgba(221,183,255,0.06)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}>
            {/* Left side info */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(221,183,255,0.08)',
                border: '1px solid rgba(221,183,255,0.2)',
                marginBottom: '2rem',
              }} className="animate-pulse-badge">
                <span className="badge-dot" />
                <span style={{
                  color: 'var(--secondary)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  Priority Cohort Opening
                </span>
              </div>
              <h1 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 0.9,
                marginBottom: '2rem',
                color: 'var(--on-surface)',
              }}>
                Only first 100<br />companies
              </h1>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.2rem',
                color: 'var(--on-surface-variant)',
                maxWidth: '30rem',
                marginBottom: '4rem',
                lineHeight: 1.7,
              }}>
                We are onboarding a selected group of early adopters to pilot the full GTOS suite. Join the first 100 to receive exclusive benefits.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  'Priority access to v1.0 core',
                  'Free early usage for first 500 assets',
                  'Direct white-glove onboarding',
                ].map(text => (
                  <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--on-surface)' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side form */}
            <div style={{ position: 'relative' }}>
              {!submitted ? (
                <form 
                  onSubmit={handleSubmit}
                  className="glass-card" 
                  style={{ padding: '3rem', borderRadius: '2.5rem', position: 'relative', zIndex: 1, border: '1px solid rgba(173,198,255,0.1)' }}
                >
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2.5rem' }}>Reserve your spot</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '0.75rem' }}>Work Email Address</label>
                      <input 
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com" 
                        style={{
                          width: '100%', padding: '1.25rem', borderRadius: '1rem',
                          background: 'var(--surface-container-lowest)', color: 'var(--on-surface)',
                          border: 'none', fontSize: '1.1rem',
                        }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--outline)', marginBottom: '0.75rem' }}>Company Size</label>
                      <select 
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        style={{
                          width: '100%', padding: '1.25rem', borderRadius: '1rem',
                          background: 'var(--surface-container-lowest)', color: 'var(--on-surface)',
                          border: 'none', fontSize: '1.1rem', appearance: 'none',
                        }} 
                      >
                        <option>1-50 employees</option>
                        <option>51-500 employees</option>
                        <option>500+ employees</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      className="glow-button"
                      style={{
                        padding: '1.25rem', borderRadius: '9999px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        color: 'var(--on-primary)', fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: 'pointer',
                        marginTop: '1rem',
                      }}
                    >
                      Apply for Priority Access
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>
                      Join 84 companies already in queue.
                    </p>
                  </div>
                </form>
              ) : (
                <div 
                  className="glass-card animate-fade-in-up" 
                  style={{ padding: '4rem 3rem', borderRadius: '2.5rem', textAlign: 'center' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '1.5rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>You're on the list!</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                    We've received your application. Our team will reach out to <strong>{email}</strong> for the next steps in our white-glove onboarding.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
