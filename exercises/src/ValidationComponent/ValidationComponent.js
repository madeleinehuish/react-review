import React from 'react';

const ValidationComponent = props => {
	let message;
	if(props.textLength < 5) {
		message = 'Too Short!'
	} else {
		message = 'Perfect Length!'
	}
	return (
		<div>{message}</div>
	)
}

export default ValidationComponent;
