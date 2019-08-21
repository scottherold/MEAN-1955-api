// This module handles routing
// <--- Modules --->
const nineteenFiftyFiveController = require ('../controllers/1955'); // imports 1955 controller

module.exports = app => {
    app.get('/', nineteenFiftyFiveController.index); // root
    app.get('/new/:name', nineteenFiftyFiveController.create); // new
    app.get('/remove/:name', nineteenFiftyFiveController.destroy); // destroy
    app.get('/:name', nineteenFiftyFiveController.show); // show
}
