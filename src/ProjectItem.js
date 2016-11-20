// import React from 'react';
// // import {Card, CardTitle,} from 'react-materialize';
// import './css/ProjectItem.css'

// var ProjectItem = React.createClass({

// 	render:function() {
// 		return(
// 			<div className="container">
// 		        <div className="col s12 m7">
// 		            <div className="card">
// 		                <div className="card-image">
// 		                    <img src={this.props.data.image} width="60%"/>
// 		                    <span className="card-title">{this.props.data.name}</span>
// 		                </div>
// 		                <div className="card-content">
// 		                    {this.props.data.description}
// 		                </div>
// 		                <div className="card-action">
// 		                	<a href={this.props.data.url}>View Full Project</a>
// 		            	</div>
// 		            </div>
// 		        </div>
// 		    </div>
// 		)
// 	}
// });

// export default ProjectItem;


import React from 'react';
// import {Card, CardTitle,} from 'react-materialize';
import {Card, CardActions,  CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var ProjectItem = React.createClass({

	render:function() {
		return(
		    <Card>
			    <CardMedia
			      overlay={<CardTitle title={this.props.data.name} />}
			    >
			      <img src={this.props.data.image} alt="project"/>
			    </CardMedia>
			    <CardText>
			      {this.props.data.description}
			    </CardText>
			    <CardActions>
			      <FlatButton href={this.props.data.url} label="View Full Project" />
			    </CardActions>
			</Card>
		)
	}
});

export default ProjectItem;

// <div class="row">
// 		        <div class="col s12 m7">
// 		            <div class="card">
// 		                <div class="card-image">
// 		                    <img src={this.props.data.image}/>
// 		                    <span class="card-title">{this.props.data.name}</span>
// 		                </div>
// 		                <div class="card-content">
// 		                    {this.props.data.description}
// 		                </div>
// 		                <div class="card-action">
// 		                	<a href={this.props.data.url}>View Full Project</a>
// 		            	</div>
// 		            </div>
// 		        </div>
// 		    </div>


