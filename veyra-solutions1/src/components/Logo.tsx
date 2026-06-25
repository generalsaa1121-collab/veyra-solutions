interface LogoProps {
  className?: string
  inverted?: boolean
}

export function LogoMark({ size = 40, color = '#1C1917' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.09)}
      viewBox="0 0 44 48"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 0 L10.5 0 L22 36 L16.5 48 Z" fill={color} />
      <path d="M44 0 L33.5 0 L22 36 L27.5 48 Z" fill={color} />
      <path d="M10.5 0 L33.5 0 L31.5 7 L12.5 7 Z" fill={color} />
    </svg>
  )
}

export default function Logo({ className = '', inverted = false }: LogoProps) {
  const primary = inverted ? '#F7F4EF' : '#1C1917'
  const sub = inverted ? 'rgba(247,244,239,0.5)' : '#9A7B4F'

  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="Veyra Solutions">
      <LogoMark size={26} color={primary} />
      <div className="flex flex-col leading-none select-none">
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.06em',
            color: primary,
            lineHeight: 1,
          }}
        >
          VEYRA
        </span>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 500,
            fontSize: '0.5rem',
            letterSpacing: '0.24em',
            color: sub,
            lineHeight: 1,
            marginTop: '4px',
            textTransform: 'uppercase',
          }}
        >
          SOLUTIONS
        </span>
      </div>
    </div>
  )
}
