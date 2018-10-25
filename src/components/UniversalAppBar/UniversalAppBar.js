'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AppHistory = require('../../resources/AppHistory');
const AppRoutes = require('../../resources/AppRoutes');

const muiStyles = require('./mui-styles');

class UniversalAppBar extends React.Component {

	goBackOrToSiteHomePage = () => {
		// Do nothing if the current page is the #AppHome page.
		if (location.pathname === AppRoutes.ROUTE_HOME) {return;}
		AppHistory.goBackOrPush(AppRoutes.ROUTE_HOME);
	};

	renderLeftIcon = ({goBackOnIconExitClicked, onIconExitClicked} = this.props) => {
		if (!onIconExitClicked && goBackOnIconExitClicked) {onIconExitClicked = this.goBackOrToSiteHomePage;}
		if (onIconExitClicked) {
			return (<IconButton color="inherit" onClick={onIconExitClicked}><ArrowBackIcon/></IconButton>);
		}
	};

	render() {
		const {classes, title} = this.props;
		return (
			<AppBar position={'static'} className={classes.appBar}>
				<Toolbar>
					{this.renderLeftIcon()}
					<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

UniversalAppBar.propTypes = {
	goBackOnIconExitClicked: PropTypes.bool,
	// Set a custom action on #IconExit clicked rather than the default #goBackOrPush().
	onIconExitClicked: PropTypes.func,
	title: PropTypes.string.isRequired,
};

export default withStyles(muiStyles)(UniversalAppBar);
