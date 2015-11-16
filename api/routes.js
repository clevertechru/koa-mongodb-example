var parse  = require('co-body');

// Route definitions
module.exports = 
{
  // List of todo items
	list: require('./routes/list'),
  add: require('./routes/add'),
  edit: require('./routes/edit'),
  remove: require('./routes/remove'),
  show: require('./routes/show'),
  create: require('./routes/create'),
  update: require('./routes/update')
};