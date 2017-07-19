var app = app || {};

var ENTER_KEY = 13;

app.AppView = Backbone.View.extend({
	el: '#health-app',

	urlRoot: 'https://api.nutritionix.com/v1_1/search/',

	events: {
		'keypress': 'search',
		'click #clearBtn': 'clearFoodList',
		// 'click '
	},


	initialize: function() {
		this.foodResultList = $('#list');

		this.listenTo(app.ResultCollection, 'add', this.addFoodResult);
		// this.listenTo(app.ResultCollection, 'destroy', this.clearFoodList);

		app.SelectedCollection.fetch();
		app.ResultCollection.fetch();
		this.clearFoodList()
	},

	addFoodResult: function(food) {
		var foodResult = new SearchResultView({
			model: food
		});
		$('#list').append(foodResult.render().el)
	},

	addSelectedFood: function(food) {
		var selectedFood = new app.FoodModel({
			name: name,
			brand_name: brand_name,
			calories: calories,
			id: id
		});
		app.SelectedCollection.create(selectedFood);
		console.log
	},

	clearFoodList: function() {
		_.invoke(app.ResultCollection.toArray(), 'destroy');
		$('#list').empty();
	    // $('.search-results').addClass('hidden');
	    // $('.recipe-div').addClass('hidden');
    	return false;
	},

	search: function(e) {
		var food, btnWrap;

		if($('#search').val() === '') {
			_.invoke(app.ResultCollection.toArray(), 'destroy');
			$('#list').empty();
		}
		if (e.which === ENTER_KEY) {
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
				 //If the food isn't in the collection, add it.
				 if (!app.ResultCollection.contains(food)) {
                     app.ResultCollection.add(food);
              }
				});
			});
		}
	}
});

// app.appView = new app.AppView;