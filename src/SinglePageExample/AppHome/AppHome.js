'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const muiStyles = require('./mui-styles');
const strings = require('./strings');

const title = strings.title;

class AppHome extends React.Component {
	renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<p>{strings.description}</p>
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

export default withStyles(muiStyles)(AppHome);
