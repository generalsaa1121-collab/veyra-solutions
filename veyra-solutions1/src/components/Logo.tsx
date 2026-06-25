interface LogoMarkProps {
  size?: number
  color?: string
}

// Faithful recreation of the Veyra Solutions V mark:
// Two angular arms form an elegant V. Each arm is a filled angular shape
// (not a simple line stroke) creating the brand's clean geometric mark.
// The interior negative space between the arms forms the V shape.
export function LogoMark({ size = 40, color = '#0F1E3A' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 48"
      fill="none"
      aria-hidden="true"
    >
      {/* Left arm — angular parallelogram shape forming left side of V */}
      <path
        d="M0 0 L10 0 L22 38 L16 48 Z"
        fill={color}
      />
      {/* Right arm — mirror of left arm */}
      <path
        d="M44 0 L34 0 L22 38 L28 48 Z"
        fill={color}
      />
      {/* Top bridge — connects the two arms across the top, creating the open V */}
      <path
        d="M10 0 L34 0 L32 6 L12 6 Z"
        fill={color}
      />
    </svg>
  )
}

interface LogoProps {
  className?: string
  variant?: 'full' | 'mark'
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', variant = 'full', color = '#0F1E3A' }: LogoProps) {
  if (variant === 'mark') {
    return <LogoMark color={color} />
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={30} color={color} />
      <div className="flex flex-col justify-center leading-none gap-[3px]">
        <span
          className="font-display font-bold tracking-wide uppercase"
          style={{
            fontSize: '1rem',
            letterSpacing: '0.08em',
            lineHeight: 1,
            color,
          }}
        >
          Veyra
        </span>
        <span
          className="font-display font-semibold tracking-widest uppercase"
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            lineHeight: 1,
            color,
          }}
        >
          Solutions
        </span>
      </div>
    </div>
  )
}
