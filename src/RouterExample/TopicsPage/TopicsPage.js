'use strict';

import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const mAppBrowserHistory = require('../../resources/AppHistory').getBrowserHistory();

const routes = require('../../resources/AppRoutes');
const muiStyles = require('./mui-styles');
const strings = require('./strings');

const title = strings.title;

class TopicsPage extends React.Component {
	goToTopicPage = (topic) => mAppBrowserHistory.push(routes.getTopicPath(topic));

	renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<IconButton color="inherit" onClick={() => mAppBrowserHistory.goBack()}>
						<ArrowBackIcon/>
					</IconButton>
					<Typography variant="title" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h2>Some Topics of Pages</h2>
				<ul>
					<li>
						<Button color="primary" onClick={() => this.goToTopicPage('rendering')}>
							Rendering with React
						</Button>
					</li>
					<li>
						<Button color="primary" onClick={() => this.goToTopicPage('components')}>
							Components
						</Button>
					</li>
					<li>
						<Button color="primary" onClick={() => this.goToTopicPage('props-v-state')}>
							Props v. State
						</Button>
					</li>
				</ul>
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

export default withStyles(muiStyles)(TopicsPage);
