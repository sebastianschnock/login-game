import Ember from 'ember';

export default Ember.Controller.extend({

	_congratulationTexts: [
		"Well done! You successfully logged in.",
		"Hello! I see you managed to log in.",
		"Wow, you got a run, don't you?",
		"Come on, you can manage to log in one more time!",
		"Success!",
		"I know you. You are the new login star!",
		"I've never seen somebody logging in so professionally",
		"I cannot believe you did it!"
	],

	actions: {

		/**
		 * Invalidate session
		 */
		logout: function() {

			this.get('session').invalidate().then(function() {
				this.transitionToRoute('login');
			});
		},

		hideCongratulations: function() {
			this.set('session.showCongratulations', false);
		}
	},

	/**
	 * A random congratulations hint
	 */
	congratulationsText: Ember.computed('session.showCongratulations', function() {
		return this.get('_congratulationTexts')[Math.floor(Math.random()*this.get('_congratulationTexts.length'))];
	})
});
