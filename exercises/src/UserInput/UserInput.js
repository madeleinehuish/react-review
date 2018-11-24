import React from 'react';

const UserInput = (props) => {
	return (
		<input onChange={props.changeUser} value={props.value}/>
	)
}

export default UserInput;
