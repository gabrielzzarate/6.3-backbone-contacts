//3rd party
var Backbone = require('backbone');
var handlebars = require('handlebars');
var $ = require('jQuery');

var models = require('../models/contacts');


var ContactView = Backbone.View.extend({

  tagName:  'li',
  className: 'contact-item',
  model: models.Contact,
  collection: models.ContactCollection,

  // Cache the template function for a single item.
  contactTemplate: handlebars.compile( $('#contact-template').html() ),

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

  edit: function() {
    // executed when contact label is double clicked
  },

  close: function() {
    // executed when contact loses focus
  },

  updateOnEnter: function( e ) {
    // executed on each keypress when in contact edit mode,
    // but we'll wait for enter to get in action
  }
});

var contact = new ContactView();
console.log(contact);

module.exports = {
  'ContactView': ContactView
};
