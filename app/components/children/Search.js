import React from "react";
import {Link} from ("react-router");

class Search extends React.Component {
	
//logic for handleSubmit and handleChange
constructor(props) {
      super(props);

      this.state(){
        setTerm: ""
      };

      }



  }

	render() {

		return (

 <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange function.
              */}
              <input
                type="text"
                value={this.state.term}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                value={this.state.term}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                value={this.state.term}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <Link to="/search"><button className="btn btn-danger btn-lg">Submit</button></Link>
            </div>
          </form>
        </div>
      </div>
            


		);
	}
};

export default Search;