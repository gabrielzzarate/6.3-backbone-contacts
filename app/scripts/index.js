//3rd party
var $ = require('jQuery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
//local
var models = require('./models/contacts');
var contactView = require('./views/contactview');



$('.createContacts').on('click', '.submit-button', function(evt){
        evt.preventDefault();



});


function addNewContact(){
  var nameInput = $('#name-input').val();
  var phoneInput = $('name-input').val();
  var companyInput = $('#company-input').val();

    models.ContactCollection.add()

}
