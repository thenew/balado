import React from 'react';
import s from './card.css';

export default class Card extends React.Component {
    render() {
        return (
	        <div className={s.card}>
				<h2 className={s.title}>{this.props.title}</h2>
	        </div>
		);
    }
}
