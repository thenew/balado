import React from 'react';
import s from './card.styl';
import Icon from 'Components/Icon';

export default class Card extends React.Component {

    render() {
        return (
	        <div className={s.card}>
				<h2 className={s.title}>{this.props.title}</h2>
				<p className={s.category}>{this.props.category}</p>
				<a href="" className="twitter">
					<Icon id="twitter-icon" className="twitter-icon" width="30" />
				</a>
				<a href="" className="patreon">
					<Icon id="patreon-icon" width="30" />
				</a>
	        </div>
		);
    }
}