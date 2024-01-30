export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'de']
  } as const

  // 'fr', 'it', 'es', 'nl', 'pl' 
  
  export type Locale = (typeof i18n)['locales'][number]