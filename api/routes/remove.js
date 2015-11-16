// Require todos model
var todos  = require('../models/todos');

module.exports = function *(id) {
  try {
    yield todos.remove({"_id": id});
    this.redirect('/');
  }
  catch( ex ) {
    this.body = ex;
    this.status = 500;
  }
};