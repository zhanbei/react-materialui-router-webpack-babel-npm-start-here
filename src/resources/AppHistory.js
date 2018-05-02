'use strict';

import {createBrowserHistory} from 'history';

// @see https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
const mBrowserHistory = createBrowserHistory();

exports.getBrowserHistory = () => mBrowserHistory;

exports.goBackOrPush = (history, route) => {
	if (history.length > 1) {
		history.goBack()
	} else {
		history.push(route);
	}
};
