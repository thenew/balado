import React from 'react';

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
					<Filters {...this.props.match.params} />
					<CardList/>
				</div>
        	</div>
    	);
    }
}