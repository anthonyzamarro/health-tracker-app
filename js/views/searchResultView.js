var SearchResultView = Backbone.View.extend({
	tagName:'tr',

  className: 'search-result-item',

  id: "food-item",

  attributes: {
    'draggable': true,
    'ondragstart': 'event.dataTransfer.setData("text", event.target.id)'
  },

  events: {
    'dragstart': 'startDrag',
    'dragend': 'endDrag'
  },

	template: _.template($('#search-results-template').html()),

  initialize: function() {},

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
