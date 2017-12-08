import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import '../assets/styles/app-critical.css';
import '../assets/styles/app.css';

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
