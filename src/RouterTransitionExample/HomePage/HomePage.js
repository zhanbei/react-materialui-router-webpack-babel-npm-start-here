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

// The home page with router.
class HomePage extends React.Component {
	goToAboutPage = () => AppHistory.push(routes.ROUTE_ABOUT);
	goToTopicsPage = () => AppHistory.push(routes.ROUTE_TOPICS);

	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentPaddingHolder}>
				<h1>{title}</h1>
				<div>
					<Button color="primary" onClick={this.goToAboutPage}>About Page</Button>
					<Button color="primary" onClick={this.goToTopicsPage}>Topics Page</Button>
				</div>
			</div>
		)
	};

	render() {
		document.title = title;
		return (
			<LayoutSimplePage
				title={title}
				domMainContent={this.renderAppBody()}
			/>
		);
	}
}

export default withStyles(muiStyles)(HomePage);
