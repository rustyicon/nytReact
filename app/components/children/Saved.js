import React from "react";
import  {Link} from ("react-router");

class Saved extends React.Component {
	constructor(props) {
      super(props);
  }
	render(){
		return(
			<div className="panel panel-default">
        		<div className="panel-heading">
         			<h3 className="panel-title text-center">Results</h3>
        		</div>
        		<div className="panel-body text-center">
          			<h1>Saved:</h1>
          				<p>{this.props.saved}</p>
        		</div>
      		</div>
		);
	}
};

export default Saved;

//pass down a setState function to results as a prop