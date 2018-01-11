import { combineReducers } from 'redux'
import { i18n } from './i18n'
import { items } from './items'

const baladoApp = combineReducers({
    i18n,
    items
})

// export global reducer
export default baladoApp