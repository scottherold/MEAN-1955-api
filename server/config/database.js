// This module contructs the database connections
// <--- Modules --->
const mongoose = require('mongoose'); // imports mongoose for server connection
const fs = require('fs'); // file-system so that we can load, read and require all model files
const path = require('path'); // utilize path for easy dir/file joining
const modelsPath = path.resolve('server', 'models'); // Dir where our models are located
const reg = new RegExp("\\.js$", "i"); // REGEX for .js extension
const db = 'mongodb://localhost/1955-api'; // URL for DB connection

// <--- DB Settings --->
mongoose.connect(db, {useNewUrlParser: true}); // Connect to the database
mongoose.Promise = global.Promise; // Override mongoose promises with global promises

// <--- DB Connection Events --->
// ** Successful Connection **
mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${ db }`); // Console logs the connection
});

// ** Error on Connection **
mongoose.connection.on('error', err => {
    console.error(`Mongoose default connection error : ${ err }`); // Error logs the error
    process.exit(0); // kills /DB connection
});

// ** Connection Disconnect **
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected'); // Note 
})

// ** Node Process End => Mongoose Disconnect **
process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose default connection disconnected through program termination'); // Note
        process.exit(0); // kills DB Connection
    })
})

// <--- Model Connection --->
//  read all the files in the models dir and check if it is a JS file, then require
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
})