var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>NYT Article Scrubber</h1>
            <p><em>Search for and annote articles of intrest</em></p>
            
          </div>

          <div className="row">
            <div className="text-center">
              
            </div>
          </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
        </div>

      </div>
		);
	}
});

module.exports = Main;