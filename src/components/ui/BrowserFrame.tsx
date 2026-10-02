import type { ReactNode } from 'react'

interface BrowserFrameProps {
  children: ReactNode
  /** Texto de la barra de direcciones */
  url?: string
  className?: string
}

/** Marco de ventana de navegador para mostrar capturas de desktop. */
export function BrowserFrame({ children, url, className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-night-line bg-[#1b221e] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-night-line px-3 py-2.5 md:px-4" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <span className="mx-auto hidden max-w-[60%] truncate rounded-md bg-night px-3 py-1 font-mono text-[11px] text-night-muted sm:block">
            {url}
          </span>
        )}
      </div>
      <div className="bg-night">{children}</div>
    </div>
  )
}
