var app = app || {};

app.SearchResultView = Backbone.View.extend({
  tagName:'tr',

  className: 'search-result-item',

  template: _.template($('#search-results-template').html()),

  initialize: function() {},

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});


