var app = app || {};


var SearchResultView = Backbone.View.extend({
	tagName: 'button',

	className: 'food-result-item',

	template: _.template($('#search-results-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});



// app.FoodResultsView  = new app.FoodResultsView;

