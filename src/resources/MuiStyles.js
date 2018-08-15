'use strict';

const flexColumn = {display: 'flex', flexFlow: 'column nowrap'};

module.exports = theme => {
	const unit = theme.spacing.unit;
	return {
		// The style for each standalone single page, which usually has a app bar,
		// a optional left navigation, and a body with main content.
		// Set the background of all pages to white to disable the transparent pages between transitions.
		pageHolder: {...flexColumn, position: 'absolute', width: '100%', height: '100%', background: 'white'},
		// The style for the app bar, which displays above the left navigation.
		appBar: {zIndex: theme.zIndex.drawer + 1},
		// The style for the app bar, which often has a min height of 64px.
		toolbar: theme.mixins.toolbar,
		// The style for the left side temporary drawer.
		drawerHolder: {width: '35%', minWidth: '280px', maxWidth: '360px'},
		// The style for the main body which holds the main content.
		bodyHolder: {flex: 1, display: 'flex'},
		// The style for the optional left navigation which, in small-screen devices, should be
		//  hidden and an extra drawer will be used for alternative.
		leftNavigationHolder: {width: '35%', minWidth: '280px', maxWidth: '360px', borderRight: '1px solid #0000001f'},
		contentHolder: {flex: 1, overflow: 'auto'},
		// Used for the main content of a page, which limits its max-width and keeps it center.
		// @see https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
		mainContentHolder: {margin: '0 auto', maxWidth: '960px'},
		// @obsolete IMPORTANT THE STYLE IS OBSOLETE NOW, AND MAY BE REMOVED ANYTIME FROM NOW ON.
		mainContentWithPaddingHolder: {margin: '0 auto', maxWidth: '960px', padding: 2 * unit},
		// A style with padding around for the #mainContent.
		mainContentPaddingHolder: {padding: 2 * unit},
		// A style with 2-unit padding around and 2-unit vertical margin for the #mainContent, which is usually for a #Paper.
		mainContentPaperHolder: {padding: unit * 2, margin: (unit * 2) + 'px 0'},
	};
};
