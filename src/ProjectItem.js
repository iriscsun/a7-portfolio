import React from 'react';
import {Card, CardActions,  CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var ProjectItem = React.createClass({

	render:function() {
		return(

			<div>
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
				<br/>
				<br/>
			</div>

		)
	}
});

export default ProjectItem;


