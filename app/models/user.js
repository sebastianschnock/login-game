import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	logins: DS.attr('number', {defaultValue: 0})
});
