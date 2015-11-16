var http        = require('http')
  , koa         = require('koa')
  , logger      = require('koa-logger')
  , route       = require('koa-route')
  , serve       = require('koa-static')
  , stylus      = require('koa-stylus')
  , routes      = require('./api/routes')
  , bodyParser  = require('koa-bodyparser');

// Create koa app
var app = koa();

// Koa middleware
app.use(logger());
app.use(bodyParser());
app.use(serve('./public'));
app.use(stylus('./public'));

// Route middleware
app.use(route.get('/', routes.list));
app.use(route.get('/todo/new', routes.add));
app.use(route.get('/todo/:id', routes.show));
app.use(route.get('/todo/delete/:id', routes.remove));
app.use(route.get('/todo/edit/:id', routes.edit));
app.use(route.post('/todo/create', routes.create));
app.use(route.post('/todo/update', routes.update));

// Create HTTP Server
app.listen(3000);

// Log port
console.log('Server listening on port 3000');
