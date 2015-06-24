import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Component.extend({

	actions: {

		/**
		 * Register a new user
		 */
		signup: function() {

			// error handling: no user name set
			if(this.get('username') === undefined) {
				this.set('error', true);
				this.set('errorReason', 'You must set a user name');
			}

			// error handling: no password set
			else if(this.get('password') === undefined) {
				this.set('error', true);
				this.set('errorReason', 'You must set a password');
			}

			// all good, try to register new user
			else {

				// create a new user authentication
				var ref = new Firebase('https://login-game.firebaseio.com');
				ref.createUser({
					email: this.get('email'),
					password: this.get('password')
				}, function(error) {

					// error handling: signup failed on firebase side
					if (error) {
						this.set('error', true);
						this.set('errorReason', 'User already exists');
					}

					// all good, proceed
					else {
						this.attrs.successfulSignup(this.get('username'), this.get('username'));
						this.send('login');
					}
				}.bind(this));
			}
		},

		/**
		 * Authenticate a user
		 */
		login: function() {

			this.get('session').authenticate('authenticator:firebase', {
				'email': this.get('email'),
				'password': this.get('password')
			})
			.then(function() {
				// success
				// save user name in session
				this.set('session.user', this.get('name'));
				this.attrs.successfulLogin(this.get('name'));
			}.bind(this), function() {
				// error
				this.set('error', true);
				this.set('errorReason', 'Invalid user or password');
			}.bind(this));
		},

		/**
		 * Authenticate a user, or delete him if things go bad ;)
		 */
		loginOrRemove: function() {

			if(Math.random() > 0.1) {

				// log the user in
				this.send('login');
			}
			else {

				// bad luck, delete the user

				var ref = new Firebase('https://login-game.firebaseio.com');
				ref.removeUser({
					email: this.get('email'),
					password: this.get('password')
				}, function(error) {
					if(error === null) {
						this.attrs.userRemoved(this.get('name'));
					}
					else {
						console.log('error deleting user');
					}
				}.bind(this));
			}

		}
	},

	// we just fake an email address here, cause firebase needs an email
	email: Ember.computed('username', function() {
		return this.get('username') + '@fakemail.com';
	}),

	/**
	 * The name of authenticated user
	 */
	name: Ember.computed('email', function() {
		// cut of the 'fake' email address part
		return this.get('email').substr(0, this.get('email').lastIndexOf('@'));
	})
});
