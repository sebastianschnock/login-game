import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		/**
		 * Invalidate session
		 */
		logout: function() {

			this.get('session').invalidate().then(function() {
				this.transitionToRoute('login');
			});
		}
	}
});
