import React from 'react';
import {Card, CardTitle,} from 'react-materialize';

var ProjectItem = React.createClass({

	render:function() {
		return(
			<Card className='small'
			  header={<CardTitle image={this.props.data.image}>{this.props.data.name}</CardTitle>}
			  actions={[<a href={this.props.data.url}>This is a Link</a>]}>
			  {this.props.data.description}
			</Card>
		)
	}
});

export default ProjectItem;

// import React from 'react';
// // import {Card, CardTitle,} from 'react-materialize';
// import {Card, CardActions,  CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

// var ProjectItem = React.createClass({

// 	render:function() {
// 		return(
// 		    <Card>
// 			    <CardMedia
// 			      overlay={<CardTitle title={this.props.data.name} />}
// 			    >
// 			      <img src={this.props.data.image} alt="project"/>
// 			    </CardMedia>
// 			    <CardText>
// 			      {this.props.data.description}
// 			    </CardText>
// 			    <CardActions>
// 			      <FlatButton href={this.props.data.url} label="View Full Project" />
// 			    </CardActions>
// 			</Card>
// 		)
// 	}
// });

// export default ProjectItem;

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


