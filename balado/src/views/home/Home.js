import React from 'react';

import Base from '../../Base';
import Card from '../../components/card/Card'
import s from './home.css';

export default class Home extends Base {
    render() {
        return (
        	<div className={'view ' + s.home}>
        		<div className={s.title}>Home component</div>
				<div className={s.cards}>
					<div className={s.card}><Card title="a" /></div>
					<div className={s.card}><Card title="b" /></div>
					<div className={s.card}><Card title="c" /></div>
				</div>
		        <h2 className="test">content</h2>
        		<p>
		          <button type="button">button</button>
		        </p>
        	</div>
    	);
    }
}