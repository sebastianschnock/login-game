import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		/**
		 * Callback for successful login action
		 */
		successfulLogin: function(uid) {

			// show congratulations
			this.set('session.showCongratulations', true);

			// increment login counter
			this.store.find('user', uid).then(function(user) {
				user.set('logins', user.get('logins') + 1);
				user.save().then(function() {
					this.transitionToRoute('highscores');
				}.bind(this));
			}.bind(this));

		},

		/**
		 * Callback for successful signup
		 */
		successfulSignup: function(uid, username) {

			// create user model to count logins
			let newUser = this.store.createRecord('user', {
				id: uid,
				name: username
			});
			newUser.save();
		},

		/**
		 * Callback for user removal
		 */
		userRemoved: function(uid) {

			this.store.find('user', uid).then(function(user) {
				this.store.deleteRecord(user);
				user.save();
				this.transitionToRoute('removed');
			}.bind(this));

		}
	}
});
