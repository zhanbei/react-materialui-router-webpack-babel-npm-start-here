/**
 * Created by Fisher at 8:13 AM on 10/10/17.
 *
 * Webpack entrance.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render((
		<div>
			<App/>
		</div>
	), document.getElementById('root')
);
