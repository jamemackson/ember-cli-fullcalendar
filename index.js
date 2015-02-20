/* jshint node: true */
'use strict';

module.exports = {
	name: 'ui-scheduler',
	included: function(app) {
		this._super.included(app);
		app.import('bower_components/fullcalendar/dist/fullcalendar.js');
		app.import('bower_components/fullcalendar/dist/fullcalendar.css');
		app.import('bower_components/moment/moment.js');
	}
};
