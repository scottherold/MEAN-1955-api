// This module constructs the models for use in the application
// <--- Modules --->
const mongoose = require('mongoose'); // import mongoose for mondel construction
const { Schema } = mongoose; // constructs a schema object from mongoose

// Model for person object in MongoDB
const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Person', personSchema); // exports the model to be used in the controller