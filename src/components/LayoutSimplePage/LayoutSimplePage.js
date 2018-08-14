'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import UniversalAppBar from "../UniversalAppBar/UniversalAppBar";

const muiStyles = require('./mui-styles');

class LayoutSimplePage extends React.Component {
	render() {
		const {classes, title, goBackOnIconExitClicked, onIconExitClicked, domMainContent} = this.props;
		return (
			<div className={classes.pageHolder}>
				<UniversalAppBar
					title={title}
					onIconExitClicked={onIconExitClicked}
					goBackOnIconExitClicked={goBackOnIconExitClicked}
				/>
				<div className={classes.bodyHolder}>
					<div className={classes.contentHolder}>
						<div className={classes.mainContentHolder}>
							{domMainContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

LayoutSimplePage.propTypes = {
	/* Extract values from ...UniversalAppBar.propTypes,*/
	/* The start of the ...UniversalAppBar.propTypes. */
	goBackOnIconExitClicked: PropTypes.bool,
	onIconExitClicked: PropTypes.func,
	title: PropTypes.string.isRequired,
	/* The end of the ...UniversalAppBar.propTypes. */
	domMainContent: PropTypes.node.isRequired,
};

export default withStyles(muiStyles)(LayoutSimplePage);
