var app = app || {};

app.ResultCollection = Backbone.Collection.extend({
	model: app.FoodModel,

	localStorage: new Backbone.LocalStorage('food-results'),
});

 app.ResultCollection = new app.ResultCollection();

