/**
 * Created by fisher at 13:25 on 9/16/17.
 *
 * The home page with router.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const mAppBrowserHistory = require('../resources/AppHistory').getBrowserHistory();

import strings from './../resources/Strings';
import styles from './../resources/Styles';
import routes from './../resources/Routes';

const title = strings.home.title;

class Home extends React.Component {
	goToAboutPage = () => mAppBrowserHistory.push(routes.ROUTE_ABOUT);
	goToTopicsPage = () => mAppBrowserHistory.push(routes.ROUTE_TOPICS);

	renderAppBar = () => {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderBody = () => {
		return (
			<div>
				<h1>{title}</h1>
				<div style={{margin: '20px'}}>
					<Button color="primary" onClick={this.goToAboutPage}>About Page</Button>
					<Button color="primary" onClick={this.goToTopicsPage}>Topics Page</Button>
				</div>
			</div>
		)
	};

	render() {
		// Reset the title of current page.
		document.title = title;
		return (
			<div>
				{this.renderAppBar()}
				<div style={styles.main}>
					{this.renderBody()}
				</div>
			</div>
		);
	}
}

export default Home;
