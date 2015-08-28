import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('about');
	this.route('games', function() {
		this.route('game', {path: '/:game_id'}, function() {});
	});

	this.route('collection');
});

export default Router;
