var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var browserHistory = router.browserHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Saved = require("../components/Saved");
var Search = require("../components/Search");

module.exports = (

	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			
			<Route path="search" component={Search} />
			<Route path="saved" component={Saved} />
			
			<IndexRoute component{Search} />
		</Route>
	</Router>
);

