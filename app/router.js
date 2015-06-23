import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('highscores');
  this.route('login');
  this.route('removed');
});

export default Router;
