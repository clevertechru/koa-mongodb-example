// Require todos model
var todos  = require('../models/todos');

// Swig template engine
var render = require('../lib/views');

module.exports = function *(id) {
  var result = yield todos.findById(id);
  console.log(JSON.stringify(result));
  if (!result) {
    this.throw(404, 'invalid todo id');
  }
  this.body = yield render('edit', {todo: result});
};