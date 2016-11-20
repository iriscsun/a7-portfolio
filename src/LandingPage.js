// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
                <img src='me.JPG' alt='pic'/>
            </div>
        )
    }
});

export default LandingPage;
