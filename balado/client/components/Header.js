import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <h2>Header component</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/podcast/1">Podcast</a></li>
                        <li><a href="/about">About</a></li>
                      </ul>
                </header>
            </div>
        );
    }
}