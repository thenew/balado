import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <h2>Header component</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/podcast/1">Podcast</Link></li>
                        <li><Link to="/about">About</Link></li>
                      </ul>
                </header>
            </div>
        );
    }
}