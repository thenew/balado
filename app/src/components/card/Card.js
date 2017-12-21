import React from 'react'
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl'
import s from './card.styl'
import Icon from 'Components/Icon'

export default class Card extends React.Component {

    render() {
        return (
	        <div className={s.card}>
				<div className={s.cardInner}>
					<div className={s.image}></div>
					<div className={s.logo}></div>
					<h2 className={s.title}>{this.props.title}</h2>
					<p className={s.category}>{this.props.category}</p>
					<a href="" className="twitter">
						<Icon id="twitter-icon" className="twitter-icon" width="30" />
					</a>
					<a href="" className="patreon">
						<Icon id="patreon-icon" width="30" />
					</a>
					<div>
						<a href="">
						<FormattedMessage 
							id="card.moreInfo"
							defaultMessage="More info"
							description="Card see more"
						/>
						</a>
					</div>
					<div>
						<FormattedDate
						value={Date.now()}
						year='numeric'
						month='long'
						day='2-digit'
						hour='numeric'
						minute='numeric'
						/>
					</div>
					<div>
						<FormattedRelative
						value={new Date(1459832991883)}
						/>
					</div>
				</div>
	        </div>
		);
    }
}