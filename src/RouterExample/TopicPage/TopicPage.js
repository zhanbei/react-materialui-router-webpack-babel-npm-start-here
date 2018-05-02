'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = require('../../resources/Styles');
const strings = require('./strings');

let titlePrefix = strings.titlePrefix;
let title = titlePrefix;

class TopicPage extends React.Component {
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
		const {match} = this.props;
		return (
			<div>
				<h1>{title}</h1>
				<div>
					<p>This is the topic page of <span style={{fontWeight: 'bold'}}>{match.params.topicId}</span></p>
				</div>
			</div>
		)
	};

	render() {
		const {match} = this.props;
		// Reset the title of current page.
		document.title = title = titlePrefix + match.params.topicId;
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

export default TopicPage;
