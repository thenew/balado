import React from 'react';
import Card from './Card'

export default class Home extends React.Component {
    render() {
        return (
        	<div>
        		<div className="">Home component</div>
        		<Card title="a" />
        		<Card title="b" />
        		<Card title="c" />
        		<Card title="d" />
        		<Card title="e" />
		          <h2 className="test">content</h2>
        		<p>
		          <button type="button">button</button>
		        </p>

        	</div>
    	);
    }
}