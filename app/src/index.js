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


ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);