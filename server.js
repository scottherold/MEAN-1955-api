// <--- Modules --->
const express = require('express'); // imports express
const bodyParser = require('body-parser'); // imports body-parser

// <--- Server Constructors --->
const port = process.env.PORT || 8000; // establishes port
const app = express(); // constructs express server

// <--- Server Settings --->
app.use(bodyParser.json()); // for interpretting JSON data
app.use(bodyParser.urlencoded({extended: true})); // Allows POST routes

// <--- Database --->
require('./server/config/database'); // Database connection
require('./server/config/routes')(app); // Routing

// <--- Port Listening --->
app.listen(port, () => console.log(`Express server listening on port ${ port }`)); // note on listen