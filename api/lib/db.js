// Load Mongoose interface
var mongoose = require('mongoose');

// Get config file for SQL connection
var connection = mongoose.connect('localhost/test', function(err)
{
    // Handle connection errors
    if (err)
    {
        // Log to console
        console.log('Mongoose connection error: ' + err);
    }
});

// Handle connection errors
mongoose.connection.on('error', function(err)
{
    // Log to console
    console.log('Mongoose connection error: ' + err);
});

// Return connection
module.exports = connection;