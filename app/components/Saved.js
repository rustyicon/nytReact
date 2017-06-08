var React = require("react");
var Link = require("react-router").Link;

var Saved = React.createClass({
	render: function(){
		return(
			<div className="panel panel-default">
        		<div className="panel-heading">
         			<h3 className="panel-title text-center">Results</h3>
        		</div>
        		<div className="panel-body text-center">
          			<h1>Saved:</h1>
          				<p>{this.props.address}</p>
        		</div>
      		</div>
		);
	}
});

module.exports = Saved;