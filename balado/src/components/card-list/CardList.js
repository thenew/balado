import React from 'react';
import s from './card-list.styl'
import Card from 'Components/card/Card'

export default class CardList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

    render() {
        return (
            <ul className={s.cards}>
            {
                this.props.items.map(function(item) {
                    return <li className={s.card} key={item.id}><Card category={item.category} title={item.title} /></li>
                })
            }
            </ul>
    	);
    }
}