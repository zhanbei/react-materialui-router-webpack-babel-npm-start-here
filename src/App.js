'use strict';

import React from 'react';
import AppHome from './AppHome/AppHome';

// App entrance: a single page without router.
class App extends React.Component {
	render() {
		return (
			<AppHome/>
		)
	}
}

export default App;
