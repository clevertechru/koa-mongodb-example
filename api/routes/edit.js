// Require todos model
var todos  = require('../models/todos');

module.exports = function *(id) {
  try {
    var result = yield todos.findById(id);
    console.log(JSON.stringify(result));
    if (!result) {
      this.throw(404, 'invalid todo id');
    }
    yield this.render('edit', {todo: result});
  }
  catch( ex ) {
    this.body = ex;
    this.status = 500;
  }
};