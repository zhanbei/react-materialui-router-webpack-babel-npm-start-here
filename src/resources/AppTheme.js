'use strict';

// @see https://material-ui-next.com/customization/themes/
module.exports = {
	palette: {
		// @see https://material.io/color/#!/?view.left=0&view.right=0&primary.color=AA00FF&primary.text.color=ffffff&secondary.color=827717&secondary.text.color=ffffff
		primary: {
			light: '#e254ff',
			main: '#aa00ff', // purple[A700]
			dark: '#7200ca',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#b4a647',
			main: '#827717', // lime[900]
			dark: '#524c00',
			contrastText: '#ffffff',
		},
	},
	// @see https://material-ui.com/style/typography/#migration-to-typography-v2
	typography: {
		useNextVariants: true,
	},
	overrides: {
		MuiButton: {
			root: {
				// Making the button not uppercase by default,
				// since we can manually set the text uppercase.
				textTransform: 'inherit',
			},
		},
	},
};
