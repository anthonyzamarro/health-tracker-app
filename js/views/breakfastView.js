var app = app || {};

app.BreakfastView = Backbone.View.extend({
	el: '#breakfast',

	attributes: {
  		'ondrop': 'ev.dataTransfer.getData("text")',
  		'ondragover': 'allowDrop(event)'
  	},

  	events: {
	  	'dragenter': 'dragEnter',
	  	'dragover': 'dragOver',
	  	'drop': 'dropped'
  	},

	initialize: function() {
      this.listenTo(app.SelectedCollection, 'change', this.addSelectedFood);

  },

	render: function() {},

  addSelectedFood: function(selectedFood) {
    // var selectedFoodCollection = app.SelectedCollection.add(selectedFood)
    console.log(app.SelectedCollection.add(selectedFood))
    
  },

	dragEnter: function (e) {
  		e.preventDefault();
  	},

    dragOver: function(e) {
  		e.preventDefault();
  	},

    dropped: function(ev) {
  		var data = ev.originalEvent.dataTransfer.getData("text/plain");
  		ev.target.appendChild(document.getElementById(data));
      // console.log(app.SelectedCollection)
      this.addSelectedFood(data);
  	},


});

new app.BreakfastView