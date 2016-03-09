//3rd party
var Backbone = require('backbone');
var $ = require('jQuery');


Backbone.ajax = function(request) {

};
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

var ContactList = Backbone.Collection.extend({
  model: Contact,
  url: 'https://www.google.com/m8/feeds/contacts/gabrielzzarate/full'


});


module.exports = {
  'Contact': Contact,
  'ContactList': ContactList
};
