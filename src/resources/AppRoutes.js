'use strict';

let home = '';
exports.ROUTE_HOME = home + '/';
exports.ROUTE_ABOUT = home + '/about';
exports.ROUTE_TOPICS = home + '/topics';
exports.ROUTE_TOPIC = home + '/topics/:topicId';

exports.getTopicPath = topicID => `/topics/${topicID}`;

