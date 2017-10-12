/**
 * Created by fisher on 13:22 on 9/16/17.
 *
 * App with router.
 * @see https://reacttraining.com/react-router/web/example/basic
 */

'use strict';

import React from 'react'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Route, Link, HashRouter} from 'react-router-dom'

import Home from './_appWithRouter/Home';
import About from './_appWithRouter/About';
import Topics from './_appWithRouter/Topics';
import Topic from './_appWithRouter/Topic';

import AppTheme from './resources/AppTheme';
import routes from './resources/Routes';

const muiTheme = createMuiTheme(AppTheme);

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={muiTheme}>
				<HashRouter>
					<div>
						<Route exact path={routes.ROUTE_HOME} component={Home}/>
						<Route exact path={routes.ROUTE_ABOUT} component={About}/>
						<Route exact path={routes.ROUTE_TOPICS} component={Topics}/>
						<Route exact path={routes.ROUTE_TOPIC} component={Topic}/>
					</div>
				</HashRouter>
			</MuiThemeProvider>
		)
	}
}

export default App