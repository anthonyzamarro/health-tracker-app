var app = app || {};
var ENTER_KEY = 13;


var SearchResultView = Backbone.View.extend({
	tagName:'tr',

	template: _.template($('#search-results-template').html()),

  initialize: function() {

    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
    
  }
});

