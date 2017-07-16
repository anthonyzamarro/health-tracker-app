var app = app || {};

app.SelectedCollection = Backbone.Collection.extend({
	model: app.FoodModel,

	localStorage: new Backbone.LocalStorage('selected-food')
})

app.SelectedCollection = new app.SelectedCollection();