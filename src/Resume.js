// Page of quotes to show
import React from 'react';
import './css/Resume.css'

// PageOne Component
var Resume = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (

			<div className='resume'>
				<img id='resume' src='resume.png' alt='resume' width="100%"/>
			</div>
		);
	}
});

export default Resume;
