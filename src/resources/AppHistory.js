'use strict';

import {createBrowserHistory} from 'history';

// @see https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
const mBrowserHistory = createBrowserHistory();
const mHistory = mBrowserHistory;

exports.getBrowserHistory = () => mBrowserHistory;

exports.push = (...params) => mHistory.push(...params);
exports.replace = (...params) => mHistory.replace(...params);
exports.goBack = (...params) => mHistory.goBack(...params);
exports.getLocation = () => mHistory.location;

const canGoBack = exports.canGoBack = () => mHistory.length > 1;

exports.goBackOrPush = (route) => {
	if (canGoBack()) {
		mHistory.goBack()
	} else {
		mHistory.push(route);
	}
};
