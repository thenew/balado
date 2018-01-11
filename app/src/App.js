import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Header from './components/header/Header'
import Home from './views/home/Home'
import About from './views/About'

export default class App extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/genre/:genre/theme/:theme/format/:format" component={Home} />
                    <Route path="/theme/:theme/format/:format" component={Home} />
                    <Route path="/genre/:genre/format/:format" component={Home} />
                    <Route path="/genre/:genre/theme/:theme" component={Home} />
                    <Route path="/genre/:genre" component={Home} />
                    <Route path="theme/:theme" component={Home} />
                    <Route path="/format/:format" component={Home} />
                    {/* <Route exact path="/category" component={Home} /> */}
                    {/* <Route path="/category/:slug" component={Home} /> */}
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
        );
    }
}
