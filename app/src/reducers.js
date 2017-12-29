import { combineReducers } from 'redux'

// Reducer locale
function locale(state = 'en-US', action) {
    switch (action.type) {
        case 'SET_LOCALE':
            console.log("%c reducers SET_LOCALE ", 'background: #000; color: #ffff00; padding: 1px 0;');
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

// export global reducer
export default baladoApp