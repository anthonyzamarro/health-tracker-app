var app = app || {};

var ENTER_KEY = 13;

app.AppView = Backbone.View.extend({
	el: '#health-app',

	urlRoot: 'https://api.nutritionix.com/v1_1/search/',

	events: {
		'keypress': 'search',
		'click #clearBtn': 'clearFoodList',
		'click #addFoodBtn': 'addSelectedFood'
	},


	initialize: function() {
		this.listenTo(app.ResultCollection, 'add', this.addFoodResult);
		// this.listenTo(app.ResultCollection, 'change', this.addSelectedFood);

		// app.ResultCollection.fetch();
		// app.SelectedCollection.fetch();
		this.clearFoodList()
	},

	addFoodResult: function(resultFood) {
		var searchResultView = new app.SearchResultView({
			model: resultFood
		});
		// console.log(searchResultView)
		$('#list').append(searchResultView.render().el, "<button id='addFoodBtn'>Add</button");
	},

	addSelectedFood: function(selectedFood) {
		var t = app.SelectedCollection.add({
			name: "poo", 
			brand_name: "poopy"
		});
		var selectedFoodView = new app.SelectedFoodView({
			model: t
		});

		console.log(t)
		console.log(selectedFoodView)
		$(".selected-food-view").append(selectedFoodView.render().el, "hey")
	},

	clearFoodList: function() {
		_.invoke(app.ResultCollection.toArray(), 'destroy');
		$('#list').empty();
    	return false;
	},

	search: function(e) {
		var food;

		//When the user searches, clear the list
		if($('#search').val() === '') {
			_.invoke(app.ResultCollection.toArray(), 'destroy');
			$('#list').empty();
		}
		//Get the nutrition information, and add to app.FoodModel
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
				 //If the food isn't in the ResultCollection, add it.
				 if (!app.ResultCollection.contains(food)) {
                     app.ResultCollection.add(food);
              }
				});
				food.save();
			});
		}
	}
});