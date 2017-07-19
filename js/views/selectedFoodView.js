var app = app || {};


app.SelectedFoodResult = Backbone.View.extend({

	model: app.FoodModel,

	template: _.template($('#selected-food-template').html()),

	events: {
		'click #testBtn': 'clicked'
	},

	initialize: function () {
		console.log(this.model)
		this.clicked();
	},

	clicked: function() {
		// console.log('click me baby one more time')
	}

});

app.SelectedFoodResult = new app.SelectedFoodResult()
