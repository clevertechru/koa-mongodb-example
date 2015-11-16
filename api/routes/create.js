// Require todos model
var todos  = require('../models/todos');

module.exports = function *() {
  var input = this.request.body;
  
  console.log(input);
  
  var d = new Date();
  
  var todo = new todos();
  
  todo.name = input.name;
  todo.description = input.description;
  todo.created_on = d;
  todo.updated_on = d;
  
  try {
    yield todo.save();
  }
  catch( ex ) {
    this.status = 500;
    this.body = ex;
    return;
  }
  
  this.redirect('/');
};