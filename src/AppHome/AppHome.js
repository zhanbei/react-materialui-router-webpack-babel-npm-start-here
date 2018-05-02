'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = require('./../resources/Styles');
const strings = require('./strings');

const title = strings.title;

class AppHome extends React.Component {
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
				<p>A basic front-end project integrated with React, MaterialUI, ReactRouter, Webpack, Babel, NPM.</p>
			</div>
		)
	};

	render() {
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

export default AppHome;
