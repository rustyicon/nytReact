import React from "react";
import {Route, Router, browserHistory, IndexRoute} from ("react-router");


import Main from "../components/Main";
import Saved from "../components/Saved";
import Search from "../components/Search";

export default (

	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			
			<Route path="search" component={Search} />
			<Route path="saved" component={Saved} />
			
			<IndexRoute component{Search} />
		</Route>
	</Router>
);

//check react-router versions
//object destructuring
//babel.js.io 
//stateless functional component