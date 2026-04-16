import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS credentials ────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service  →  copy the Service ID below
// 3. Create an email template with variables {{from_name}}, {{from_email}},
//    {{company_size}}, and set the "To Email" to devanshpurohit@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────────

export default function Waitlist() {
  const [email, setEmail]       = useState('')
  const [name, setName]         = useState('')
  const [company, setCompany]   = useState('')
  const [size, setSize]         = useState('1-50 employees')
  const [status, setStatus]     = useState('idle') // idle | sending | success | error
  const formRef                 = useRef(null)

  useEffect(() => {
    document.title = 'Join Waitlist | GTOS'
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name:    name,
      from_email:   email,
      company_name: company,
      company_size: size,
      to_email:     'devanshpurohit@gmail.com',
      reply_to:     email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
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
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '30%', right: '-200px',
          width: '600px', height: '600px',
          background: 'rgba(221,183,255,0.06)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%', left: '-100px',
          width: '400px', height: '400px',
          background: 'rgba(173,198,255,0.04)',
          filter: 'blur(100px)',
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
            {/* ── Left: info panel ── */}
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
                fontSize: '1.15rem',
                color: 'var(--on-surface-variant)',
                maxWidth: '32rem',
                marginBottom: '4rem',
                lineHeight: 1.7,
              }}>
                We are onboarding a selected group of early adopters to pilot the full GTOS suite.
                Join the first 100 to receive exclusive founding-member benefits.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  'Priority access to v1.0 core platform',
                  'Free early usage for first 500 assets',
                  'Direct white-glove onboarding session',
                  'Founding member badge & public recognition',
                ].map(text => (
                  <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', flexShrink: 0 }}>check_circle</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--on-surface)' }}>{text}</span>
                  </li>
                ))}
              </ul>

              {/* Counter badge */}
              <div style={{
                marginTop: '3rem',
                padding: '1.5rem',
                borderRadius: '1.5rem',
                background: 'var(--surface-container-highest)',
                border: '1px solid rgba(173,198,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                maxWidth: '360px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1, color: 'var(--primary)' }}>84</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.25rem' }}>Companies in queue</div>
                </div>
                <div style={{ height: '50px', width: '1px', background: 'rgba(66,71,84,0.4)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1, color: 'var(--secondary)' }}>16</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.25rem' }}>Spots remaining</div>
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div style={{ position: 'relative' }}>
              {status === 'success' ? (
                <div className="glass-card animate-fade-in-up" style={{
                  padding: '4rem 3rem',
                  borderRadius: '2.5rem',
                  textAlign: 'center',
                  border: '1px solid rgba(173,198,255,0.15)',
                }}>
                  <span className="material-symbols-outlined" style={{
                    fontSize: '5rem',
                    color: 'var(--primary)',
                    display: 'block',
                    marginBottom: '1.5rem',
                    fontVariationSettings: "'FILL' 1",
                  }}>verified</span>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                    You're on the list!
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--on-surface-variant)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    We've received your application from <strong style={{ color: 'var(--on-surface)' }}>{email}</strong>.
                    Our team will be in touch for the next steps in your white-glove onboarding.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setEmail(''); setName(''); setCompany('') }}
                    style={{
                      marginTop: '2rem',
                      padding: '0.75rem 2rem',
                      border: '1px solid rgba(173,198,255,0.2)',
                      borderRadius: '9999px',
                      background: 'transparent',
                      color: 'var(--primary)',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="glass-card"
                  style={{
                    padding: '3rem',
                    borderRadius: '2.5rem',
                    border: '1px solid rgba(173,198,255,0.1)',
                    position: 'relative',
                  }}
                >
                  {/* Form glow */}
                  <div style={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: '2.5rem',
                    background: 'linear-gradient(135deg, rgba(173,198,255,0.08), rgba(221,183,255,0.06))',
                    filter: 'blur(20px)',
                    zIndex: -1,
                    pointerEvents: 'none',
                  }} />

                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--on-surface)',
                  }}>
                    Reserve your spot
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--on-surface-variant)',
                    marginBottom: '2.5rem',
                  }}>
                    Fill in your details and we'll reach out directly.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Jane Smith"
                        style={inputStyle}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Work Email Address</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        style={inputStyle}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input
                        required
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        style={inputStyle}
                      />
                    </div>

                    {/* Company size */}
                    <div>
                      <label style={labelStyle}>Company Size</label>
                      <select
                        value={size}
                        onChange={e => setSize(e.target.value)}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      >
                        <option>1-50 employees</option>
                        <option>51-500 employees</option>
                        <option>500+ employees</option>
                      </select>
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div style={{
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(255,180,171,0.08)',
                        border: '1px solid rgba(255,180,171,0.25)',
                        color: 'var(--error)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                      }}>
                        Something went wrong. Please try again or email us directly at devanshpurohit@gmail.com
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="glow-button"
                      style={{
                        padding: '1.25rem',
                        borderRadius: '9999px',
                        background: status === 'sending'
                          ? 'rgba(173,198,255,0.3)'
                          : 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        color: 'var(--on-primary)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(0,46,106,0.3)', borderTopColor: 'var(--on-primary)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                          Sending…
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>send</span>
                          Apply for Priority Access
                        </>
                      )}
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--on-surface-variant)' }}>
                      🔒 Your information is encrypted. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 768px) {
            section { padding: 5rem 1.25rem !important; }
          }
        `}</style>
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
  marginBottom: '0.6rem',
  fontFamily: 'Inter, sans-serif',
}

const inputStyle = {
  width: '100%',
  padding: '1rem 1.25rem',
  borderRadius: '0.875rem',
  background: 'var(--surface-container-lowest)',
  color: 'var(--on-surface)',
  border: '1px solid rgba(66,71,84,0.3)',
  fontSize: '1rem',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
}
