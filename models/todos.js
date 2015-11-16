var mongoose = require('../lib/db');

// Prepare schema
var schema = new mongoose.Schema(
    {
        name:           String,
        description:    String
    } );

// Indexes (if any)
//schema.index( { name: 1 } );

// Return the model
module.exports = mongoose.model( 'tests', schema );