// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
            	<p id='line1'>Hi, I'm Iris!</p>
                <img id='me' src='me.JPG' alt='pic' align='center'/>
                <p id='line2'>Welcome to my site.</p>
                <p id='line3'>Using the navigation bar, you can find projects I have worked on, my resume, and a way to get in touch with me!</p>
            </div>
        )
    }
});

export default LandingPage;
