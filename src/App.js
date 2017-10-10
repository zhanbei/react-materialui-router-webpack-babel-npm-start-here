/**
 * Created by fisher on 10:43 on 9/16/17.
 *
 * App entrance.
 */

'use strict';

import React from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import PageHome from './home/Home';
import AppTheme from './resources/AppTheme';

const muiTheme = createMuiTheme(AppTheme);

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={muiTheme}>
				<PageHome/>
			</MuiThemeProvider>
		);
	}
}

export default App;
