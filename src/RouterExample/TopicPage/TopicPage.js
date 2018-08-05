'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AppHistory = require('../../resources/AppHistory');

const muiStyles = require('./mui-styles');
const strings = require('./strings');

let titlePrefix = strings.titlePrefix;
let title = titlePrefix;

class TopicPage extends React.Component {
	renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<IconButton color="inherit" onClick={() => AppHistory.goBack()}>
						<ArrowBackIcon/>
					</IconButton>
					<Typography variant="title" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderAppBody = ({classes, match} = this.props) => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<div>
					<p>This is the topic page of <span style={{fontWeight: 'bold'}}>{match.params.topicId}</span></p>
				</div>
			</div>
		)
	};

	render() {
		const {classes, match} = this.props;
		// Reset the title of current page.
		document.title = title = titlePrefix + match.params.topicId;
		return (
			<div>
				{this.renderAppBar()}
				<div className={classes.toolbar}/>
				{this.renderAppBody()}
			</div>
		);
	}
}

export default withStyles(muiStyles)(TopicPage);
