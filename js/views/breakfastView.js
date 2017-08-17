// var app = app || {};

// app.BreakfastView = Backbone.View.extend({
// el: '#breakfast',

// attributes: {
// 		'ondrop': 'ev.dataTransfer.getData("text")',
// 		'ondragover': 'allowDrop(event)'
// 	},

// 	events: {
//   	'dragenter': 'dragEnter',
//   	'dragover': 'dragOver',
//   	'drop': 'dropped',
//     'click #addFoodBtn': 'addSelectedFood'
// 	},

// 	initialize: function() {
//       this.listenTo(app.appView, 'change', this.addSelectedFood);

//   },

// 	render: function() {},

//   addSelectedFood: function(selectedFood) {
//     var breakfastView = new app.BreakfastView({
//       model: selectedFood
//     });
//     $("#breakfast").append(breakfastView.render())
//   },

// 	// dragEnter: function (e) {
// 	// 	e.preventDefault();
// 	// },

//  //  dragOver: function(e) {
// 	// 	e.preventDefault();
// 	// },

//  //  dropped: function(ev) {
//  //    var data = ev.originalEvent.dataTransfer.getData("text/plain");
// 	// 	    ev.target.appendChild(document.getElementById(data));
//  //    // console.log(ev.originalEvent.path[0].innerText)
//  //    // this.addSelectedFood(data);
// 	// },
// });

// new app.BreakfastView