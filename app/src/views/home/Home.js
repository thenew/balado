import React from 'react';
import { Link } from 'react-router-dom'

import s from './home.styl'
import Base from '../../Base';
import CardList from 'Components/card-list/CardList'
import data from 'Data/cards.json'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.filterList = this.filterList.bind(this);

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
					<div className={s.title}>Home component</div>

					<div>
						<Link to="/">None</Link>
						<Link to="/category/1">Categorie 1</Link>
						<Link to="/category/2">Categorie 2</Link>
						<Link to="/category/3">Categorie 3</Link>
					</div>

					<CardList items={this.state.items}/>
				</div>
        	</div>
    	);
    }
}