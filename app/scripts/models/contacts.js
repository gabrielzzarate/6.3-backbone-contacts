//3rd party
var Backbone = require('backbone');
var $ = require('jQuery');


// Backbone.ajax = function(request) {
//
// };
// google api key AIzaSyBRvzBPUBX54lJVUoGMg4KNmTL0fTuFTCY

var Contact = Backbone.Model.extend({
  // Default contact attribute values
  defaults: {
    title: '',

  },
  initialize: function(){
    console.log('A contact model has been made!');
    this.on('change', function(){
        console.log('- Values for this contact have changed.');
    });
  },
  validate: function(attributes){
    if(attributes.title === undefined){
        return "Remember to set a title for your contact.";
    }
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mycontacts/'
  //url: 'https://www.google.com/m8/feeds/contacts/gabrielzzarate/full'


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
