/**
 * App entry point
 * Configurations and render App component
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// # Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import baladoApp from './reducers'
let store = createStore(baladoApp)


// # SVG
// Import all the svg in /svg at once instead of import them before every use
let svgIcons = require.context('SvgIcons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)


// # Styles
// Import base styles
import './assets/styles/app.styl';


// # i18n
import ConnectedIntlProvider from './ConnectedIntlProvider';
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...en, ...fr])

// Get user's browser language, fallback to en
let locale =
    (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US'

// Split user locale with a region code (get the 'en' in 'en-US')
const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
    
import { flattenMessages } from './utils'
import localeData from 'I18n/messages'

// Get translated strings, try full locale, fallback to locale without region code
let messages = localeData[localeWithoutRegionCode] || localeData[locale];

messages = flattenMessages(messages)

store.dispatch({
    "type": 'SET_LOCALE',
    "locale": locale
})

store.dispatch({
    "type": 'SET_MESSAGES',
    "messages": messages
})

ReactDOM.render(
    <Provider store={store}> 
        <ConnectedIntlProvider> 
            <App />
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
);