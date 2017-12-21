import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './components/header/Header'
import Home from './views/home/Home'
import About from './views/About'

// import all the svg in /svg at once instead of import them before every use
let svgIcons = require.context('SvgIcons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

// import '../assets/styles/app-critical.css';
import './assets/styles/app.styl';

export default class App extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/category" component={Home} />
                <Route path="/category/:slug" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/about" component={About} />
            </div>
        </Router>
        );
    }
}
