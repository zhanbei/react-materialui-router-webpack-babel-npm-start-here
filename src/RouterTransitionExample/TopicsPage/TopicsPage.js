'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LayoutSimplePage from "../../components/LayoutSimplePage/LayoutSimplePage";

const AppHistory = require('../../resources/AppHistory');

const routes = require('../../resources/AppRoutes');
const muiStyles = require('./mui-styles');
const strings = require('./strings');

const title = strings.title;

class TopicsPage extends React.Component {
	goToTopicPage = (topic) => AppHistory.push(routes.getTopicPath(topic));

	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentPaddingHolder}>
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
		return (
			<LayoutSimplePage
				title={title}
				goBackOnIconExitClicked={true}
				domMainContent={this.renderAppBody()}
			/>
		);
	}
}

export default withStyles(muiStyles)(TopicsPage);
