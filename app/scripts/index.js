//3rd party
var $ = require('jQuery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
//local
var models = require('./models/contacts');
var contactView = require('./views/contactview');
var formView = require('./views/formview');

var ContactModel = new models.Contact();

var newContact = new models.ContactCollection();
var formView = new formView.FormView({collection: newContact});
console.log(newContact);
$('.createContacts').html(formView.render().el);

var contactView = new contactView.ContactView({collection: newContact});
$('.showContacts').html(contactView.render().el);

//this.el.html

var contacts = new models.ContactCollection();
contacts.fetch().done(function(){
  var formView = new formView.FormView( { collection: contacts });

});


$('.createContacts').on('click', '.submit-button', function(evt){
        evt.preventDefault();



});


function addNewContact(){
  var nameInput = $('#name-input').val();
  var phoneInput = $('name-input').val();
  var companyInput = $('#company-input').val();

  //  models.ContactCollection.add()

}
