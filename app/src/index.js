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
import baladoApp from './redux/reducers/index'
import { loadState, saveState } from './localstorage'
import throttle from 'lodash/throttle'

let persistedState = loadState()
let store = createStore(baladoApp, persistedState)

// store.subscribe(throttle(() => {
//     saveState({
//         i18n: store.getState().i18n
//     })
// }, 1000))

// # SVG
// Import all the svg in /svg at once instead of import them before every use
let svgIcons = require.context('SvgIcons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)


// # Styles
// Import base styles
import './assets/styles/app.styl';


// # i18n l10n
import ConnectedIntlProvider from 'Components/ConnectedIntlProvider';

import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
addLocaleData([...en, ...fr])

ReactDOM.render(
    <Provider store={store}> 
        <ConnectedIntlProvider> 
            <App />
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
);