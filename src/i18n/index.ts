import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import es from './locales/es'

export const LANGUAGES = ['es', 'en'] as const
export type Language = (typeof LANGUAGES)[number]

// El sitio siempre arranca en español; el toggle cambia el idioma
// solo durante la visita (al recargar vuelve a español).
i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

// Mantener <html lang> sincronizado con el idioma activo
document.documentElement.lang = i18n.language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

export default i18n
