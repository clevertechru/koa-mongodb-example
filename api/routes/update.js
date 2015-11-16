// Require todos model
var todos  = require('../models/todos');

module.exports = function *() {
  var input = this.request.body;
  console.log(input);
  yield todos.update( {_id: input.id}, {
    name: input.name,
    description: input.description,
    created_on: new Date(input.created_on),
    updated_on: new Date()});
  this.redirect('/');
};