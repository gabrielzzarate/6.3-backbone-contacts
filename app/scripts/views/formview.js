//3rd party
var Backbone = require('backbone');
var handlebars = require('handlebars');
var $ = require('jQuery');

var FormView = Backbone.View.extend({

  tagName:  'li',
  className: 'form-item',
  //model: //instance of model
  //collection: //instance of collection

  // Cache the template function for a single item.
  formTemplate: handlebars.compile( $('#form-template').html() ),

  events: {
    "click .clickMe" : "complete",
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function (options) {

    // your view, you will need to save them as follows:
    this.options = options || {};
    this.listenTo(this.model, "add", this.render);
  },

  // Re-render the title of the contact item.
  render: function() {
    this.$el.html( this.contactTemplate(this.collection.toJSON()) );
    this.input = this.$('.edit');
    return this;
  },

  createContact: function(){
    $.fn.serializeObject = function() {
   return this.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
   }, {});
    };


   var formInputs = $(event.this).serializeObject();

  },

  edit: function() {
    // executed when contact label is double clicked
  },

});



module.exports = {
  'FormView': FormView
};
