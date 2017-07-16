var app = app || {};

var ENTER_KEY = 13;

app.AppView = Backbone.View.extend({
	el: '#health-app',

	urlRoot: 'https://api.nutritionix.com/v1_1/search/',

	events: {
		'keypress': 'search'
	},


	initialize: function() {
		//Make sure the food result list is clear
		$('#list').html('');
		this.listenTo(app.ResultCollection, 'add', this.addFoodResult);

		app.ResultCollection.fetch();
		this.render()
	},

	addFoodResult: function(food) {
		var foodResult = new SearchResultView({
			model: food
		});
		$('#list').append(foodResult.render().el);
	},

	search: function(e) {
		var food;
		if ($('#search').val() === '') {
			$('#list').html('');
		} else if (e.which === ENTER_KEY) {
			this.query =  $('#search').val() + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=be7425dc&appKey=c7abd4497e5d3c8a1358fb6da9ec1afe';
			this.newUrl = this.urlRoot + this.query;
		var getFood = $.get(this.newUrl, function(data) {
				var hits = data.hits;
				var name, brand_name, calories, id;
				_.each(hits, function(hit){
					name = hit.fields.item_name;
					brand_name = hit.fields.brand_name;
					calories = hit.fields.nf_calories;
					id = hit.fields.item_id;
				 food = new app.FoodModel({
					name: name,
					brand_name: brand_name,
					calories: calories,
					id: id
				});
				 //If new food item isn't present in collection then add it
				 if (!app.ResultCollection.contains(food)) {
                     app.ResultCollection.create(food);
              }
				});

			});
		}
	},

	render: function() {
		// console.log(app.ResultCollection)
	}
});

app.appView = new app.AppView;