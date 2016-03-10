//3rd party
var Backbone = require('backbone');
var handlebars = require('handlebars');
var $ = require('jQuery');




var ContactView = Backbone.View.extend({

  tagName:  'td',
  className: 'contact-item',


  // Cache the template function for a single item.
  template: handlebars.compile( $('#contact-template').html() ),

  events: {
    "click .clickMe" : "complete",
    'click .destroy': 'clear',

  },

  initialize: function () {

    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "reset", this.render);




  },



  render: function() {
    console.log("rendering...");
    //this.$el.html(this.template());
    this.$el.html( this.template(this.collection.toJSON()) );
    this.listenTo(this.collection, 'add', this.render);
    return this;
  },

  clear: function(event) {
    //this.collection.models.destroy();
    console.log(this.model);
    console.log(this.collection);
    console.log("deleting...");
  }


});


module.exports = {
  'ContactView': ContactView
};
