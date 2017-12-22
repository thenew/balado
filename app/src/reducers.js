import { combineReducers } from 'redux'

function locale(state = 'en-US', action) {
    switch (action.type) {
        case 'SET_LOCALE':
            return action.locale
        default:
            return state
    }
}
  
function messages(state = null, action) {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.messages
        default:
            return state
    }
}
  
const baladoApp = combineReducers({
    locale,
    messages
})
  
export default baladoApp