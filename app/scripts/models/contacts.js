//3rd party
var Backbone = require('backbone');
var Validation = require('backbone-validation');
var $ = require('jQuery');


var Contact = Backbone.Model.extend({
  // Default contact attribute values
  defaults: {
    name: '',
    age: '',
    email: ''




  },
  initialize: function(){
    console.log('A contact model has been made!');
    this.on('change', function(){
        console.log('- Values for this contact have changed.');
    });

  },

  validation: {
    name: {
      required: true
    },

    age: {
      range: [1, 80]
    },
    email: {
      pattern: 'email'
    },


  }

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/contactdirectory/'



});


// var myContacts = new ContactCollection();
// myContacts.reset([
//   myContacts.each(function(contact){
//     contact.save();
//

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
};
