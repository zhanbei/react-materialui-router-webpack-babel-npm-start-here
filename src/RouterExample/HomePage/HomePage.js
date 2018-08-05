'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const mAppBrowserHistory = require('../../resources/AppHistory').getBrowserHistory();

const routes = require('../../resources/AppRoutes');
const muiStyles = require('./mui-styles');
const strings = require('./strings');

const title = strings.title;

// The home page with router.
class HomePage extends React.Component {
	goToAboutPage = () => mAppBrowserHistory.push(routes.ROUTE_ABOUT);
	goToTopicsPage = () => mAppBrowserHistory.push(routes.ROUTE_TOPICS);

	renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<Typography variant="title" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<div style={{margin: '20px'}}>
					<Button color="primary" onClick={this.goToAboutPage}>About Page</Button>
					<Button color="primary" onClick={this.goToTopicsPage}>Topics Page</Button>
				</div>
			</div>
		)
	};

	render() {
		document.title = title;
		const {classes} = this.props;
		return (
			<div>
				{this.renderAppBar()}
				<div className={classes.toolbar}/>
				{this.renderAppBody()}
			</div>
		);
	}
}

export default withStyles(muiStyles)(HomePage);
