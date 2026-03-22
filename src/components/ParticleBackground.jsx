export default function ParticleBackground() {
  const particles = [
    { w: 4, h: 4, top: '10%', left: '20%', delay: '0s' },
    { w: 8, h: 8, top: '40%', left: '80%', delay: '2s' },
    { w: 4, h: 4, top: '70%', left: '10%', delay: '4s' },
    { w: 6, h: 6, top: '30%', left: '60%', delay: '1s' },
    { w: 4, h: 4, top: '90%', left: '50%', delay: '5s' },
    { w: 3, h: 3, top: '20%', left: '75%', delay: '3s' },
    { w: 5, h: 5, top: '55%', left: '35%', delay: '1.5s' },
    { w: 4, h: 4, top: '80%', left: '85%', delay: '6s' },
  ]
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="floating-particle animate-drift"
          style={{
            width: p.w,
            height: p.h,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
