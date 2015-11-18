// Dependencies
var http        = require('http')
  , koa         = require('koa')
  , views       = require('koa-views')
  , logger      = require('koa-logger')
  , serve       = require('koa-static')
  , stylus      = require('koa-stylus')
  , bodyParser  = require('koa-bodyparser');

// Routing  
var router = require('./api/router')

// Create koa app
var app = koa();

// Koa middleware
app.use(logger());
app.use(bodyParser());
app.use(serve('./public'));
app.use(stylus('./public'));

// Views middleware
app.use(views('views', {
  map: {html: 'swig'}
}));

// Route definitions
router(app);

// Create HTTP Server
app.listen(3000);

// Log port
console.log('Server listening on port 3000');
