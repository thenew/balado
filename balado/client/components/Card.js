import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
	        <div className="card">
	        	test
				<h2>{this.props.title}</h2>
	        </div>
		);
    }
}
