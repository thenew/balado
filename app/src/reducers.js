import { combineReducers } from 'redux'

// i18n
import { flattenMessages } from './utils'
import en_US from 'reactIntlJson-loader!Languages/en_US'
import fr_FR from 'reactIntlJson-loader!Languages/fr_FR'

let languages = {
    'en_US': en_US,
    'fr_FR': fr_FR,
}

// Reducer i18n locale
function i18n(state = 'en-US', action) {
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

const baladoApp = combineReducers({
    i18n
})

// export global reducer
export default baladoApp