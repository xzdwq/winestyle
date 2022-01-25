import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

import availableLanguages from './available-languages.yaml'
import datetimeFormats from './date-formats.yaml'
import numberFormats from './number-formats.yaml'

export type Language = keyof typeof availableLanguages
export const defaultLanguages: Language = 'ru-RU'

export function loadLangMessages (): LocaleMessages<VueMessageType> {
  const locales = require.context(
    './translations',
    true,
    /[A-Za-z0-9-_\s]+\.yaml$/i,
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export const i18n = createI18n({
  legacy: false as boolean,
  locale: defaultLanguages,
  fallbackLocale: defaultLanguages,
  messages: loadLangMessages(),
  silentTranslationWarn: true as boolean,
  datetimeFormats,
  numberFormats,
})
