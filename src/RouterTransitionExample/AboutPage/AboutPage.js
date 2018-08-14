'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LayoutSimplePage from "../../components/LayoutSimplePage/LayoutSimplePage";

const muiStyles = require('./mui-styles');
const strings = require('./strings');

const title = strings.title;

class AboutPage extends React.Component {
	renderAppBody = ({classes} = this.props) => {
		return (
			<div className={classes.mainContentPaddingHolder}>
				<h1>{title}</h1>
				<p>This is the about us page.</p>
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

export default withStyles(muiStyles)(AboutPage);
