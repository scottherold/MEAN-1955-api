// This modules is the application's controller
// <--- Modules --->
const Person = require('mongoose').model('Person'); // Imports person model

// <--- Controller Functions --->
module.exports = {
    // ** Index **
    index(req, res) {
        // Find All
        Person.find({})
            .then(people => res.json(people))
            .catch(err => res.json(err));
    },
    // ** Show One **
    show(req, res) {
        // Find One
        Person.findOne(req.params)
            .then(person => {
                res.json(person ? person : 'No such person existed in 1955'); // return JSON person, unless person doesn't exist, then return string
            })
            .catch(err => res.json(err));
    },
    // ** New **
    create(req, res) {
        // Create
        Person.create(req.params)
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },
    // ** Delete **
    destroy(req, res) {
        // Delete one
        Person.deleteOne(req.params)
            .then(result => Response.json(result))
            .catch(err => res.json(err));
    }
}