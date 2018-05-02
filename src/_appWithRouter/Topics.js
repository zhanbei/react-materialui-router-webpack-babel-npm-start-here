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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Route, Link, HashRouter} from 'react-router-dom'

import strings from './../resources/Strings';
import styles from './../resources/Styles';
import routes from './../resources/Routes';

const title = strings.topics.title;

class Topics extends React.Component {

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
				<h2>Some Topics of Pages</h2>
				<ul>
					<li>
						<Link to={routes.getTopicPath('rendering')}>
							Rendering with React
						</Link>
					</li>
					<li>
						<Link to={routes.getTopicPath('components')}>
							Components
						</Link>
					</li>
					<li>
						<Link to={routes.getTopicPath('props-v-state')}>
							Props v. State
						</Link>
					</li>
				</ul>

				<Route exact path={match.url} render={() => (
					<h3>Please select a topic.</h3>
				)}/>
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
