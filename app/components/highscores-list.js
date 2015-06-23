import Ember from 'ember';

export default Ember.Component.extend({

	/**
	 * Highscores sorted in descending order
	 */
	sortedHighscores: Ember.computed('highscores', function() {
		return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
			sortProperties: ['logins'],
			sortAscending: false,
			content: this.get('highscores')
		});
	})
});
