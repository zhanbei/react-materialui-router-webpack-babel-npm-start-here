'use strict';

module.exports = theme => {
	const unit = theme.spacing.unit;
	return {
		toolbar: theme.mixins.toolbar,
		mainContentHolder: {margin: '0 auto', maxWidth: '960px'},
		mainContentWithPaddingHolder: {margin: '0 auto', maxWidth: '960px', padding: 2 * unit},
	};
};
