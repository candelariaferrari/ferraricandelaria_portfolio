import { useTranslation } from 'react-i18next'

const Key = ({ children }: { children: string }) => <span className="text-mint">"{children}"</span>
const Str = ({ children }: { children: string }) => <span className="text-amber">"{children}"</span>

/** Tarjeta que simula la respuesta de GET /api/v1/cande */
export function ApiCard({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation()

  return (
    <figure
      className="m-0 overflow-hidden rounded-[10px] bg-night text-night-code shadow-[0_24px_48px_rgba(17,23,20,0.18)]"
      aria-label={t('apiCard.label')}
    >
      <div
        className={`flex items-center justify-between border-b border-night-line-soft font-mono ${
          compact ? 'px-3 py-2.5 text-[10px]' : 'px-4 py-3 text-xs'
        }`}
      >
        <span>
          <span className="text-[#7fd1a8]">GET</span> /api/v1/cande
        </span>
        <span className="text-[#7fd1a8]">200 OK{compact ? '' : ' · 38ms'}</span>
      </div>
      <pre className={`m-0 overflow-x-auto font-mono leading-relaxed ${compact ? 'p-3 text-[11px]' : 'px-[18px] pt-4 pb-5 text-[13px]'}`}>
        <code>
          {'{\n  '}
          <Key>{t('apiCard.keyRole')}</Key>: <Str>{t('apiCard.role')}</Str>
          {',\n  '}
          <Key>{t('apiCard.keyBase')}</Key>: <Str>{t('apiCard.base')}</Str>
          {',\n'}
          {!compact && (
            <>
              {'  '}
              <Key>{t('apiCard.keyStack')}</Key>: [<Str>React</Str>, <Str>Angular</Str>,{'\n            '}
              <Str>Node</Str>, <Str>PostgreSQL</Str>]{',\n  '}
              <Key>{t('apiCard.keyLooking')}</Key>: [<Str>Frontend</Str>, <Str>Full Stack</Str>]{',\n'}
            </>
          )}
          {'  '}
          <Key>{t('apiCard.keyAvailable')}</Key>: <span className="text-[#7fd1a8]">true</span>
          {'\n}'}
        </code>
      </pre>
    </figure>
  )
}
