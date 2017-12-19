import React from 'react';
import s from './card.styl';
import Icon from '../Icon';


export default class Card extends React.Component {
    render() {
        return (
	        <div className={s.card}>
				<h2 className={s.title}>{this.props.title}</h2>
				<p className={s.category}>{this.props.category}</p>
				<a href="" className="twitter">
					<Icon id="twitter-icon" />
				</a>
	        </div>
		);
    }
}