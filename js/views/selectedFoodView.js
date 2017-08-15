var app = app || {};

app.SelectedFoodView = Backbone.View.extend({
  el: '.selected-food-view',

  events: {
  	'drop .drop-area': 'addSelectedFood',
  },

  initialize: function() {
    // this.listenTo(app.appView, 'add', this.addSelectedFood);
  	this.listenTo(app.ResultCollection, 'add', this.addSelectedFood);
  	// this.listenTo(app.LunchView, 'add', this.addSelectedFood);
  	// this.listenTo(DinnerView, 'add', this.addSelectedFood);
  	// this.listenTo(SnackView, 'add', this.addSelectedFood);
  },

  render: function () {

  },

  addSelectedFood: function(food) {

    // var data = food.dataTransfer.getData("text/plain");
      // food.target.appendChild(document.getElementById(data));
    // console.log(app.ResultCollection)
   },

});

new app.SelectedFoodView


