import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="projects" component={Projects}/>
                <Route path="resume" component={Resume}/>
                <Route path="contact" component={Contact}/>
            </Route>
        </Router>,
  document.getElementById('root')
);