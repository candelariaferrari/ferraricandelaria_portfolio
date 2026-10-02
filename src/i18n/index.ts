import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import es from './locales/es'

export const LANGUAGES = ['es', 'en'] as const
export type Language = (typeof LANGUAGES)[number]

const STORAGE_KEY = 'cf-lang'

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

// Mantener <html lang> y la preferencia sincronizados
document.documentElement.lang = i18n.language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // sin persistencia, no pasa nada
  }
})

export default i18n
