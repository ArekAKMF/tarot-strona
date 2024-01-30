import 'server-only'
import type { Locale } from '../../i18n.config'

const dictionaries = {
  en: () => import('@/dictionares/en.json').then(module => module.default),
  de: () => import('@/dictionares/de.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()