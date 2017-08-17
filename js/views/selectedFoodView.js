var app = app || {};

app.SelectedFoodView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template($('#selected-food-template').html()),

  initialize: function() {},

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
  

});


