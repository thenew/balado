import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {addLocaleData, IntlProvider} from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

import { flattenMessages } from './utils'

import localeData from 'I18n/messages'

addLocaleData([...en, ...fr])

// Get user's browser language
let locale =
    (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US'


// Split locales with a region code
const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
    
// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[localeWithoutRegionCode] || localeData[locale];

ReactDOM.render(
    <IntlProvider locale={locale} messages={flattenMessages(messages)}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);