'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const mAppBrowserHistory = require('../../resources/AppHistory').getBrowserHistory();

const routes = require('../../resources/Routes');
const styles = require('../../resources/Styles');
const strings = require('./strings');

const title = strings.title;

// The home page with router.
class HomePage extends React.Component {
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

export default HomePage;
