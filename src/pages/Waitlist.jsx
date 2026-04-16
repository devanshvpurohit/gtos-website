import { useState, useEffect } from 'react'

export default function Waitlist() {
  const [email, setEmail]       = useState('')
  const [name, setName]         = useState('')
  const [company, setCompany]   = useState('')
  const [size, setSize]         = useState('1-50 employees')

  useEffect(() => {
    document.title = 'Join Waitlist | GTOS'
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Constructing the mailto link with pre-filled details
    const subject = encodeURIComponent(`GTOS Waitlist Application: ${company}`)
    const body = encodeURIComponent(
      `GTOS Founding Cohort Application Details:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Company Size: ${size}\n\n` +
      `Sent via GTOS Early Access Form.`
    )
    
    // Opening the user's default email client
    window.location.href = `mailto:devanshpurohit@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main style={{ paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
      <section style={{
        padding: '8rem 2rem',
        background: 'var(--surface-container-low)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow visuals */}
        <div style={{
          position: 'absolute',
          top: '30%', right: '-200px',
          width: '600px', height: '600px',
          background: 'rgba(0,210,255,0.06)',
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
            {/* Left side: branding/copy */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(0,210,255,0.08)',
                border: '1px solid rgba(0,210,255,0.2)',
                marginBottom: '2rem',
              }}>
                <span className="badge-dot" style={{ background: 'var(--primary)' }} />
                <span style={{
                  color: 'var(--primary)',
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
                Apply for our founding cohort to receive white-glove onboarding and exclusive early access to the GTOS platform.
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

            {/* Right side: form */}
            <div style={{ position: 'relative' }}>
              <form 
                onSubmit={handleSubmit}
                className="glass-card" 
                style={{
                  padding: '3rem',
                  borderRadius: '2.5rem',
                  position: 'relative',
                  border: '1px solid rgba(0,210,255,0.1)'
                }}
              >
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2.5rem' }}>Apply for Access</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Name Input */}
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input 
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name" 
                      style={inputStyle} 
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label style={labelStyle}>Work Email Address</label>
                    <input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com" 
                      style={inputStyle} 
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input 
                      required
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name" 
                      style={inputStyle} 
                    />
                  </div>

                  {/* Size Input */}
                  <div>
                    <label style={labelStyle}>Company Size</label>
                    <select 
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      style={inputStyle}
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
                      color: 'white', fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: 'pointer',
                      marginTop: '1rem',
                    }}
                  >
                    Click to Send Application →
                  </button>
                  
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>
                    Submitting will open your default email app.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ── Shared input styles ────────────────────────────────────────────────────
const labelStyle = {
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--outline)',
  marginBottom: '0.75rem'
}

const inputStyle = {
  width: '100%',
  padding: '1.25rem',
  borderRadius: '1rem',
  background: 'var(--surface-container-lowest)',
  color: 'var(--on-surface)',
  border: '1px solid rgba(0,210,255,0.1)',
  fontSize: '1.1rem',
  outline: 'none'
}
