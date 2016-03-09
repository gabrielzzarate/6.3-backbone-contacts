//3rd party
var Backbone = require('backbone');
var handlebars = require('handlebars');


var ContactView = Backbone.View.extend({

  tagName:  'li',
  className: 'contact-item',

  // Cache the template function for a single item.
  contactTemplate: handlebars.compile( $('#contact-template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function (options) {
    // In Backbone 1.1.0, if you want to access passed options in
    // your view, you will need to save them as follows:
    this.options = options || {};
  },

  // Re-render the title of the contact item.
  render: function() {
    this.$el.html( this.contactTemplate( this.model.attributes ) );
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

module.exports = {
  'ContactView': ContactView
};
