import { combineReducers } from 'redux'

// i18n
import { flattenMessages } from './utils'
import localeData from 'I18n/messages'

// Reducer i18n locale
function i18n(state = 'en-US', action) {
    switch (action.type) {
        case 'SET_LOCALE':

            // Split user locale with a region code (get the 'en' in 'en-US')
            const localeWithoutRegionCode = action.locale.toLowerCase().split(/[_-]+/)[0]
                
            // Get translated strings, try full locale, fallback to locale without region code
            let messages = localeData[localeWithoutRegionCode] || localeData[action.locale];

            // From objects format to flat
            messages = flattenMessages(messages)

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