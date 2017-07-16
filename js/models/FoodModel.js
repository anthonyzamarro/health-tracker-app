var app = app || {};

app.FoodModel = Backbone.Model.extend({
	url: '/js/models/model.js',

	defaults: {
		name: 'food',
		brand_name: 'brand_name',
		calories: 0,
		id: 0
	}
});


