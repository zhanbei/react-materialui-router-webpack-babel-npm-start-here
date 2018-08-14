'use strict';

const muiStyles = require('../../resources/MuiStyles');

module.exports = theme => {
	const styles = muiStyles(theme);
	return {
		pageHolder: styles.pageHolder,
		bodyHolder: styles.bodyHolder,
		contentHolder: styles.contentHolder,
		mainContentHolder: styles.mainContentHolder,
	};
};
