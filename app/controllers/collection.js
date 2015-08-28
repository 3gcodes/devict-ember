import Ember from 'ember';

export default Ember.Controller.extend({
	collectionTotal: Ember.computed('model.@each', function() {
		var games = this.get('model');
		return games.get('length');
	})
});