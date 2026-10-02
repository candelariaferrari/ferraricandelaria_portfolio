import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cambiar de ruta: si la URL trae #ancla, scrollea a esa sección;
 * si no, vuelve arriba de todo.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
