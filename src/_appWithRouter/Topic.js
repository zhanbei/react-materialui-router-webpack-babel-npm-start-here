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
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import strings from './../resources/Strings';
import styles from './../resources/Styles';

let titlePrefix = strings.topic.titlePrefix;
let title = titlePrefix;

class Topic extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {

	}

	renderAppBar = () => {
		const {history} = this.props;
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="contrast" onClick={() => history.goBack()}>
						<ArrowBackIcon/>
					</IconButton>
					<Typography type="title" color="inherit">
						{title}
					</Typography>
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

export default Topic;
