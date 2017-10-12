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
import {Route, Link, HashRouter} from 'react-router-dom'

import strings from './../resources/Strings';
import styles from './../resources/Styles';
import routes from './../resources/Routes';

const title = strings.home.title;

class Home extends React.Component {

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
					<Typography type="title" color="inherit">
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderBody = () => {
		return (
			<div>
				<h1>{}</h1>
				<div style={{margin: '20px'}}>
					<Link to={routes.ROUTE_ABOUT}>About</Link><br/>
					<Link to={routes.ROUTE_TOPICS}>Topics</Link><br/>
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
