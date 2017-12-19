import React from 'react';
import { Link } from 'react-router-dom'

import Base from '../../Base';
import CardList from '../../components/card-list/CardList'
import s from './home.styl'
import data from '../../data/cards.json'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.filterList = this.filterList.bind(this);

		this.state = {
			items: data
		}
	}

	componentDidMount() {
		if (this.props.match.params.id) {
			this.setState({
				items: this.filterList()
			})
		}
	}
    
    filterList() {
		console.log("this.props.match.params.id: ", this.props.match.params.id);
        let newList = data.filter((item) => {
            return item.category_id == this.props.match.params.id
		})
		return newList
	}
	
    render() {
        return (
        	<div className={'view ' + s.home}>
        		<div className={s.title}>Home component</div>

				<div>
					<Link to="/category/1" data-category="1" onClick={this.filterList}>Categorie 1</Link>
					<Link to="/category/2" data-category="2" onClick={this.filterList}>Categorie 2</Link>
					<Link to="/category/3" data-category="3" onClick={this.filterList}>Categorie 3</Link>
				</div>

				<CardList items={this.state.items}/>

		        <h2 className="test">content</h2>
        		<p>
		          <button type="button">button</button>
		        </p>
        	</div>
    	);
    }
}