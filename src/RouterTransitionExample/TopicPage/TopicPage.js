'use strict';

import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LayoutSimplePage from "../../components/LayoutSimplePage/LayoutSimplePage";

const muiStyles = require('./mui-styles');
const strings = require('./strings');

let titlePrefix = strings.titlePrefix;
let title = titlePrefix;

class TopicPage extends React.Component {
	renderAppBody = ({classes, match} = this.props) => {
		return (
			<div className={classes.mainContentPaddingHolder}>
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
			<LayoutSimplePage
				title={title}
				goBackOnIconExitClicked={true}
				domMainContent={this.renderAppBody()}
			/>
		);
	}
}

export default withStyles(muiStyles)(TopicPage);
