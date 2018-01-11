import React from 'react'
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl'
import s from './card.styl'
import Icon from 'Components/Icon'

export default class Card extends React.Component {

    render() {
		const item = this.props

        return (
	        <div className={s.card}>
				<div className={s.cardInner}>
					<div className={s.header}>
						<h2 className={s.title}>{item.title}</h2>
						<div className={s.theme}>{item.theme}</div>
					</div>
					<div className={s.picture}>
						<div className={s.image}></div>
						<div className={s.logo}></div>
					</div>
					<div className={s.texts}>
						<p className={s.category}>{item.category}</p>
						<p className={s.description}>{item.description}</p>
						<p className={s.description}>{item.format}</p>
						<a className={s.link} href="{item.url}" target="_blank">{item.url_label}</a>
						<FormattedRelative
						value={new Date(1459832991883)}
						/>
					</div>
				</div>
	        </div>
		);
    }
}