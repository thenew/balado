// Reducer i18n locale
import enUS from 'Languages/en_US'
import frFR from 'Languages/fr_FR'

const languages = {
  'fr-FR': frFR,
  'en-US': enUS
}

// Get user's browser language, fallback to en
const locale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    Object.keys(languages)[0]

const defaultState = {
  'locale': locale,
  'messages': languages[locale]
}

console.log('defaultState: ', defaultState)

export function i18n(state = defaultState, action) {

  let locale, messages

  switch (action.type) {
    case 'SET_LOCALE':

      locale = action.locale.replace('-', '_')
      messages = languages[locale]

      return {
        'locale': action.locale,
        'messages': messages
      }
    default:
      return state
  }
}
