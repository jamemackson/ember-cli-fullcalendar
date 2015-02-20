import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['ui-scheduler'],
	_didInsertElement: function() {
		this.$().fullCalendar();
	}.on('didInsertElement')
});
