// Require todos model
var todos  = require('../models/todos');

module.exports = function *(id) {
  yield todos.remove({"_id": id});
  this.redirect('/');
};