import React from 'react';

import Base from '../../Base';
import CardList from '../../components/card-list/CardList'
import s from './home.styl'
import data from '../../data/cards.json'

export default class Home extends Base {
	constructor(props) {
		super(props)

		this.state = {
			items: data
		}
	}

	componentWillMount() {
	}

    render() {
        return (
        	<div className={'view ' + s.home}>
        		<div className={s.title}>Home component</div>

				<CardList items={this.state.items}/>

		        <h2 className="test">content</h2>
        		<p>
		          <button type="button">button</button>
		        </p>
        	</div>
    	);
    }
}