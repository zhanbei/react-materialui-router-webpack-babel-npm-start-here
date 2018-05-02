/**
 * Created by fisher at 13:26 on 9/16/17.
 *
 * About page.
 */

'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const mAppBrowserHistory = require('../resources/AppHistory').getBrowserHistory();

import strings from './../resources/Strings';
import styles from './../resources/Styles';
import routes from './../resources/Routes';

const title = strings.topics.title;

class Topics extends React.Component {
	goToTopicPage = (topic) => mAppBrowserHistory.push(routes.getTopicPath(topic));

	renderAppBar = () => {
		const {history} = this.props;
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit" onClick={() => history.goBack()}>
						<ArrowBackIcon/>
					</IconButton>
					<Typography variant="title" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderBody = () => {
		return (
			<div>
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

export default Topics;
