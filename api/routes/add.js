var render = require('../lib/views');
  
module.exports = function *() {
  this.body = yield render('new');
};