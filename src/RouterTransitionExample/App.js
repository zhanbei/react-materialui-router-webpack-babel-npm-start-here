'use strict';

import React from 'react'
import {Route, Router, Switch, withRouter} from 'react-router-dom'
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group';
import './resources/transition-styles.less';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import TopicsPage from './TopicsPage/TopicsPage';
import TopicPage from './TopicPage/TopicPage';

const routes = require('../resources/AppRoutes');
const AppHistory = require('../resources/AppHistory');
const mAppBrowserHistory = AppHistory.getBrowserHistory();

// @see https://reactcommunity.org/react-transition-group/
// @see https://reacttraining.com/react-router/web/example/animated-transitions
// @see https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a
const RoutesWithTransition = withRouter(({location}) => (
	<TransitionGroup>
		<CSSTransition
			key={location.key}
			// Keep classNames and timeout consistent with './resources/the transition-styles.less'
			classNames={'slide-in'}
			timeout={500}
		>
			<Switch location={location}>
				<Route exact path={routes.ROUTE_HOME} component={HomePage}/>
				<Route exact path={routes.ROUTE_ABOUT} component={AboutPage}/>
				<Route exact path={routes.ROUTE_TOPICS} component={TopicsPage}/>
				<Route exact path={routes.ROUTE_TOPIC} component={TopicPage}/>
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));

// App entrance used browser router with react-router.
// @see https://reacttraining.com/react-router/web/example/basic
class App extends React.Component {
	render() {
		return (
			<Router history={mAppBrowserHistory}>
				<RoutesWithTransition/>
			</Router>
		)
	}
}

export default App;