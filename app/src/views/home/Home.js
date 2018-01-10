import React from 'react';
import data from 'Data/cards.json'

import s from './home.styl'
import Base from '../../Base';
import CardList from 'Components/card-list/CardList'
import Filters from 'Components/filters/Filters'

export default class Home extends Base {
	constructor(props) {
		console.log("%c Home ", 'background: #000; color: #ffff00; padding: 1px 0;');
		super(props)
		this.filterList = this.filterList.bind(this);

		console.log("this.props: ", this.props);

		this.state = {
			items: data
		}
	}

	componentDidMount() {
		this.filterList()
	}

	componentWillReceiveProps(props) {
		this.props = props;
		this.filterList()
	}
		
    filterList() {
		if(this.props.match.params.slug) {
			let newList = data.filter((item) => {
				return item.category_id == this.props.match.params.slug
			})
			this.setState({
				items: newList
			})
		}
	}
	
    render() {
        return (
        	<div className={'view ' + s.view}>
				<div className="wrap">
					<Filters filter={this.props.match.params.filter} />
					<CardList items={this.state.items}/>
				</div>
        	</div>
    	);
    }
}