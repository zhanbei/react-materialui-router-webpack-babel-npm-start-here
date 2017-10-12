/**
 * Created by fisher at 9:54 AM on 1/28/17.
 */

'use strict';

let home = '';
exports.ROUTE_HOME = home + '/';
exports.ROUTE_ABOUT = home + '/about';
exports.ROUTE_TOPICS = home + '/topics';
exports.ROUTE_TOPIC = home + '/topics/:topicId';

exports.getTopicPath = topicID => `/topics/${topicID}`;

