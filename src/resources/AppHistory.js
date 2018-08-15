'use strict';

import {createBrowserHistory} from 'history';

const EventListener = require('../../utils/EventListener');

// @see https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
const mBrowserHistory = createBrowserHistory();
const mHistory = mBrowserHistory;

const mEventListener = new EventListener();
exports.ACTION_PUSH = 'PUSH';
exports.ACTION_POP = 'POP';
exports.ACTION_REPLACE = 'REPLACE';
exports.ACTION_UNKNOWN = 'UNKNOWN';
// Add listeners which will be triggered when the location is going to change.
// Currently, only the manual change of the location is supported.
exports.addOnHashChangeListener = (...params) => mEventListener.addListener(...params);

/* Get the browser history instance. */

exports.getBrowserHistory = () => mBrowserHistory;

/* Override the existed methods. */

exports.push = (...params) => {
	mEventListener.triggerEvent({action: exports.ACTION_PUSH});
	return mHistory.push(...params);
};
exports.replace = (...params) => {
	mEventListener.triggerEvent({action: exports.ACTION_REPLACE});
	return mHistory.replace(...params);
};
exports.goBack = (...params) => {
	mEventListener.triggerEvent({action: exports.ACTION_POP});
	return mHistory.goBack(...params);
};
exports.getLocation = () => mHistory.location;

/* Add new methods. */

const canGoBack = exports.canGoBack = () => mHistory.length > 1;

exports.goBackOrPush = (route) => {
	if (canGoBack()) {
		exports.goBack()
	} else {
		exports.push(route);
	}
};
