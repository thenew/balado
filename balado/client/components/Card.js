import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
		<div>
	        <div className="card">
				<img
					src={item.image_url}
					className="card-image"
					alt=""
				/>
				<h2>{item.title}</h2>
	        </div>
		</div>
		);
    }
}
