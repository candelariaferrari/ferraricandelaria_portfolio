interface CodeCommentProps {
  lines: string[]
  tone?: 'light' | 'dark'
  className?: string
}

/** Texto con forma de comentario de código (/** ... *\/), en monoespaciada. */
export function CodeComment({ lines, tone = 'light', className = '' }: CodeCommentProps) {
  const text = tone === 'dark' ? 'text-night-muted' : 'text-ink-soft'
  const marks = tone === 'dark' ? 'text-[#5f6b64]' : 'text-[#8a877f]'

  return (
    <p className={`m-0 font-mono text-[13px] leading-[1.8] md:text-sm ${text} ${className}`}>
      <span className={`block ${marks}`} aria-hidden="true">
        /**
      </span>
      {lines.map((line) => (
        <span key={line} className="flex gap-2">
          <span className={`shrink-0 pl-1.5 ${marks}`} aria-hidden="true">
            *
          </span>
          <span>{line}</span>
        </span>
      ))}
      <span className={`block pl-1.5 ${marks}`} aria-hidden="true">
        */
      </span>
    </p>
  )
}
