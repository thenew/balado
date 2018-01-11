// Reducer i18n locale
import en_US from 'reactIntlJson-loader!Languages/en_US'
import fr_FR from 'reactIntlJson-loader!Languages/fr_FR'

const languages = {
    'fr-FR': fr_FR,
    'en-US': en_US,
}

// Get user's browser language, fallback to en
let locale =
    (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || Object.keys(languages)[0]

const defaultState = {
    'locale': locale,
    'messages': languages[locale]
}

console.log("defaultState: ", defaultState);

export function i18n(state = defaultState, action) {

    switch (action.type) {
        case 'SET_LOCALE':

            let locale = action.locale.replace('-', '_')
            let messages = languages[locale];
            
            return {
                'locale': action.locale,
                'messages': messages
            }
        default:
            return state
    }
}