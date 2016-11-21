// Page of projects to show
import React from 'react';
import ProjectItem from './ProjectItem.js'
import Baby from 'babyparse'
import $ from 'jquery'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/Project.css'

// Project Component
var Projects = React.createClass({
	getInitialState(){
		return{projects:[]}
	},

	componentDidMount(){
		$.get('data/projects.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},

	render() {
		return (
			<div className='container'>
				<div className="row">
                    {this.state.projects.map(function(d, i){
                    	return (
	                        <MuiThemeProvider><ProjectItem
	                         	key={'project-' + i} 
	                         	data={d} /></MuiThemeProvider>
                    	)
                    })}
		        </div>
			</div>
		);
	}
});

export default Projects;
