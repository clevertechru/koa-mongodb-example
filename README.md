Koa MongoDB Example
===================

This is a fork of [Elzair/koa-mongodb-example](https://github.com/Elzair/koa-mongodb-example), modified to use Mongoose instead of Monk as the ODM for interfacing with MongoDB.

This project shows you how to create a simple CRUD app using the [Koa](http://koajs.com/) framework, the [Swig](http://paularmstrong.github.io/swig/) template engine, and the [Mongoose](https://github.com/Automattic/mongoose) MongoDB library.

Use
---

To run this example, first launch a local [MongoDB](https://www.mongodb.org/) instance.

    mongod

Then run the following commands in the root directory of this project.

    npm install
    npm start

Special Thanks
--------------

Thank you [Philip Woods](https://github.com/Elzair) for the original source project.

Thank you [Shiju Varghese](http://weblogs.asp.net/shijuvarghese/default.aspx) for writing the [original tutorial](http://weblogs.asp.net/shijuvarghese/archive/2014/01/12/a-simple-crud-demo-with-koa-js.aspx). I simply split the example into multiple files and added support for MongoDB.

