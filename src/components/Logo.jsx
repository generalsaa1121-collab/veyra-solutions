export default function Logo({ variant = 'horizontal', color = 'navy', className = '' }) {
  const markColor = color === 'white' ? '#FFFFFF' : '#0F1E3A'
  const textColor = color === 'white' ? '#FFFFFF' : '#0F1E3A'

  const Mark = () => (
    <svg
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer V strokes */}
      <path
        d="M2 4L24 40L46 4"
        stroke={markColor}
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Inner V strokes */}
      <path
        d="M11 4L24 28L37 4"
        stroke={markColor}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  )

  if (variant === 'mark') {
    return (
      <div className={`inline-flex ${className}`} style={{ width: 36, height: 33 }}>
        <Mark />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div style={{ width: 36, height: 33, flexShrink: 0 }}>
        <Mark />
      </div>
      <div className="flex flex-col leading-none" style={{ gap: 1 }}>
        <span
          style={{
            color: textColor,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: variant === 'large' ? '1.25rem' : '1rem',
            letterSpacing: '0.12em',
            lineHeight: 1,
          }}
        >
          VEYRA
        </span>
        <span
          style={{
            color: textColor,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 300,
            fontSize: variant === 'large' ? '1.25rem' : '1rem',
            letterSpacing: '0.18em',
            lineHeight: 1,
          }}
        >
          SOLUTIONS
        </span>
      </div>
    </div>
  )
}
