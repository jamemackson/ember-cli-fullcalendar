/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
app.import('bower_components/moment/moment.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/fullcalendar/dist/fullcalendar.js');
app.import('bower_components/fullcalendar/dist/fullcalendar.css');

module.exports = app.toTree();
