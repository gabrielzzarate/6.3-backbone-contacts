//3rd party
var Backbone = require('backbone');
var handlebars = require('handlebars');
var $ = require('jQuery');
var utlities = require('./viewutlities');

var FormView = Backbone.View.extend({

  tagName:  'form',
  className: 'form-item',


  // Cache the template function for a single item.
  template: handlebars.compile( $('#form-template').html() ),

  events: {
    "click #submit-button" : "formatForm",

  },

  initialize: function () {

    this.listenTo(this.collection, "add", this.render);

  },


  render: function(model) {

    this.$el.html(this.template());
    return this;
  },

  formatForm: function(event){
      event.preventDefault();
      var contactData = this.$el.serializeArray().reduce(function(acum, i) {
       acum[i.name] = i.value;
       return acum;
        }, {});
        console.log(contactData);
        this.collection.create(contactData);
        //this.collection.add(contactData);
        //Backbone.Validation.bind(this);
      }


});



module.exports = {
  'FormView': FormView
};
