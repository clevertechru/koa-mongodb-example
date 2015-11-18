// Require todos model
var todos  = require('../models/todos');

module.exports = function *(id) {
  try {
    var result = yield todos.findById(id);
    if (!result) {
      this.throw(404, 'invalid todo id');
    }
    yield this.render('show', {todo: result});
  }
  catch( ex ) {
    this.body = ex;
    this.status = 500;
  }
};