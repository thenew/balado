import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './components/Header'
import Home from './views/home/Home'
import About from './views/About'

// import '../assets/styles/app-critical.css';
import './assets/styles/app.css';

export default class App extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />

            </div>
        </Router>
        );
    }
}
