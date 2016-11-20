// Page of quotes to show
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.css'
import './css/Contact.css'
import RaisedButton from 'material-ui/RaisedButton';


// PageOne Component

var Contact = React.createClass({
	// Render a <Quote> element for each element in the state
	
	render() {
		return (
			<div><p id='line1'>Hi There!</p>
				<p id='line2'>Thanks for checking out my projects, if you want to get in touch, please shoot me an email!</p>
				<p id='line3'><a href="mailto:iriscsun@gmail.com" target="_top"><button id='button' type="button"><i className="fa fa-envelope mail"></i> Send Mail</button></a></p>
				
			</div>
		);
	}
});

export default Contact;

