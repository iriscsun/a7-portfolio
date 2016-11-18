// Page of projects to show
import React from 'react';
import ProjectItem from './ProjectItem.js'
import Baby from 'babyparse'
import $ from 'jquery'

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
			<div>
				<div className="row">
                    {this.state.projects.map(function(d, i){
                    	return (
	                        <ProjectItem
	                         	key={'project-' + i} 
	                         	data={d} />
                    	)
                    })}
		        </div>
			</div>
		);
	}
});

export default Projects;
