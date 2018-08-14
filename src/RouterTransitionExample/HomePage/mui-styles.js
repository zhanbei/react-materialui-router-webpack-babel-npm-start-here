'use strict';

const muiStyles = require('../../resources/MuiStyles');

module.exports = theme => {
	const styles = muiStyles(theme);
	return {
		mainContentPaddingHolder: styles.mainContentPaddingHolder,
	};
};
