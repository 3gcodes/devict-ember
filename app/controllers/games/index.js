import Ember from 'ember';

export default Ember.Controller.extend({
	isAddingGame: false,

	actions: {
		addToCollection: function(game_id) {
			const flashMessages = Ember.get(this, 'flashMessages');
			var ownedGame = this.store.createRecord('ownedGame');
			this.store.find('game', game_id).then(function(game) {
    			ownedGame.set('game', game);
    			ownedGame.save();
    			flashMessages.success('Successfully added to collection!');
			});
			
		},
		addGame: function() {
			this.set('isAddingGame', !this.get('isAddingGame'));
		},
		newGame: function() {
			var title = this.get('title');
			var description = this.get('description');
			var image = this.get('image');

			if (!title || !description || !image) {
				return false;
			}

			var game = this.store.createRecord('game', {
				title: title,
				description: description,
				image: image
			});
			this.set('title', '');
			this.set('description', '');
			this.set('image', '');
			game.save();
		}
	}
});