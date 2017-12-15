import React from 'react';
import Card from '../../components/card/Card'
import s from './card-list.styl'

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