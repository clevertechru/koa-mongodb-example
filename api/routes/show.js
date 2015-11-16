// Require todos model
var todos  = require('../models/todos');

// Swig template engine
var render = require('../lib/views');

module.exports = function *(id) {
  try {
    var result = yield todos.findById(id);
    if (!result) {
      this.throw(404, 'invalid todo id');
    }
    this.body = yield render('show', {todo: result});
  }
  catch( ex ) {
    this.body = ex;
    this.status = 500;
  }
};