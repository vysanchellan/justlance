interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
      {children}
    </span>
  )
}
