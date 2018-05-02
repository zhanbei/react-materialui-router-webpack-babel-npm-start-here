'use strict';

const muiStyles = require('../resources/MuiStyles');

module.exports = theme => {
	const styles = muiStyles(theme);
	return {
		toolbar: styles.toolbar,
		mainContentWithPaddingHolder: styles.mainContentWithPaddingHolder,
	};
};
