import React from 'react'
import s from './header.styl'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header className={s.header}>
                <h2>BALADO</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/podcast/1">Podcast</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
            </header>
        );
    }
}