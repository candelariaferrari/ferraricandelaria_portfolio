import type { ReactNode } from 'react'

/** Marco de celular para mostrar capturas mobile. */
export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border-[6px] border-[#1b221e] bg-night shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-night-line ${className}`}
    >
      <span
        className="absolute top-2 left-1/2 z-10 h-4 w-1/3 -translate-x-1/2 rounded-full bg-[#1b221e]"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
