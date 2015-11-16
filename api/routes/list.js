// Require todos model
var todos  = require('../models/todos');

// Swig template engine
var render = require('../lib/views');

module.exports = function *()
{
  try {
    var results = yield todos.find({});
    console.log(results);
    
    this.body = yield render('index', {todos: results});
  }
  catch( ex ) {
    this.body = ex;    
    this.status = 500;
  }
};