/**
 * Created by fisher at 8:23 on 10/10/17.
 *
 * The home page.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import strings from './../resources/Strings';
import styles from './../resources/Styles';

const title = strings.title;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {

	}

	renderAppBar = () => {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography type="title">
						{title}
					</Typography>
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
		// Reset the title of current page.
		document.title = title;
		console.log('Rending home/Home.js');
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

export default App;
