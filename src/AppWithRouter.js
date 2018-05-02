'use strict';

import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import Home from './_appWithRouter/Home';
import About from './_appWithRouter/About';
import Topics from './_appWithRouter/Topics';
import Topic from './_appWithRouter/Topic';

import routes from './resources/Routes';

const mAppBrowserHistory = require('./resources/AppHistory').getBrowserHistory();

// App entrance used browser router with react-router.
// @see https://reacttraining.com/react-router/web/example/basic
class App extends React.Component {
	render() {
		return (
			<Router history={mAppBrowserHistory}>
				<Switch>
					<Route exact path={routes.ROUTE_HOME} component={Home}/>
					<Route exact path={routes.ROUTE_ABOUT} component={About}/>
					<Route exact path={routes.ROUTE_TOPICS} component={Topics}/>
					<Route exact path={routes.ROUTE_TOPIC} component={Topic}/>
				</Switch>
			</Router>
		)
	}
}

export default App;