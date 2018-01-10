import React from 'react'
import s from './filters.styl'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default class Filters extends React.Component {

    render() {

        return (
	        <div className={s.filters}>
				{/* <Link className={s.filtersItem} to="/">None</Link>
				<Link className={s.filtersItem} to="/category/1">Categorie 1</Link>
				<Link className={s.filtersItem} to="/category/2">Categorie 2</Link>
				<Link className={s.filtersItem} to="/category/3">Categorie 3</Link> */}

				<Link className={s.filtersItem} to="/format/short">Short</Link>
				<Link className={s.filtersItem} to="/format/medium">Medium</Link>
				<Link className={s.filtersItem} to="/format/long">Long</Link>
	        </div>
		);
    }
}