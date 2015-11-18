// Require todos model
var todos  = require('../models/todos');

module.exports = function *()
{
  try {
    var results = yield todos.find({});
    console.log(results);
    
    yield this.render('index', {todos: results});
  }
  catch( ex ) {
    this.body = ex;    
    this.status = 500;
  }
};