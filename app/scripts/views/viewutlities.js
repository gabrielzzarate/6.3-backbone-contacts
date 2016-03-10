var Backbone = require('backbone');
var handlebars = require('handlebars');
var $ = require('jQuery');


$.fn.serializeObject = function() {
return this.serializeArray().reduce(function(acum, i) {
 acum[i.name] = i.value;
 return acum;
  }, {});
};
