interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'mark'
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Geometric faceted V — inspired by brand crystal mark */}
      {/* Bottom tip */}
      <path d="M20 38 L6 14 L14 14 Z" fill="url(#gradLeft)" />
      <path d="M20 38 L26 14 L34 14 Z" fill="url(#gradRight)" />
      {/* Top bar left */}
      <path d="M4 6 L14 6 L14 14 L6 14 Z" fill="url(#gradTopL)" />
      {/* Top bar right */}
      <path d="M26 6 L36 6 L34 14 L26 14 Z" fill="url(#gradTopR)" />
      {/* Center bridge */}
      <path d="M14 6 L26 6 L26 14 L14 14 Z" fill="url(#gradCenter)" opacity="0.5" />
      {/* Inner light edge */}
      <path d="M14 14 L20 38 L26 14 Z" fill="rgba(255,255,255,0.05)" />
      {/* Top highlight line */}
      <line x1="4" y1="6" x2="36" y2="6" stroke="rgba(99,139,235,0.5)" strokeWidth="0.5" />
      {/* Side edges */}
      <line x1="4" y1="6" x2="20" y2="38" stroke="rgba(59,95,192,0.3)" strokeWidth="0.5" />
      <line x1="36" y1="6" x2="20" y2="38" stroke="rgba(59,95,192,0.3)" strokeWidth="0.5" />
      <defs>
        <linearGradient id="gradLeft" x1="6" y1="14" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A4DB5" />
          <stop offset="100%" stopColor="#12256B" />
        </linearGradient>
        <linearGradient id="gradRight" x1="34" y1="14" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F72D9" />
          <stop offset="100%" stopColor="#2A4DB5" />
        </linearGradient>
        <linearGradient id="gradTopL" x1="4" y1="6" x2="14" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6B8EE8" />
          <stop offset="100%" stopColor="#3B5FC0" />
        </linearGradient>
        <linearGradient id="gradTopR" x1="36" y1="6" x2="26" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5079D4" />
          <stop offset="100%" stopColor="#2A4DB5" />
        </linearGradient>
        <linearGradient id="gradCenter" x1="14" y1="6" x2="26" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F72D9" />
          <stop offset="100%" stopColor="#3B5FC0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'mark') return <LogoMark />

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={32} />
      <div className="flex flex-col justify-center leading-none gap-0.5">
        <span
          className="font-display font-bold text-ink"
          style={{ fontSize: '1.05rem', letterSpacing: '-0.025em', lineHeight: 1 }}
        >
          Veyra<span className="text-blue-glow">A</span>
        </span>
        <span
          className="font-display font-semibold text-ink-dim tracking-[0.2em] uppercase"
          style={{ fontSize: '0.5rem' }}
        >
          Solutions
        </span>
      </div>
    </div>
  )
}
