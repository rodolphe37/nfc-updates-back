const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/',  function(req, res, next) {
    User.findAll()
        .then(users => {
            res.header('Access-Control-Expose-Headers', 'X-Total-Count');
            res.header('X-Total-Count', 19);
            res.json(users)
        })
        .catch(error => {
            res.json('error: ' + error)
        })
});

router.get('/:id', function(req, res, next) {
    User.findOne({
        where: {
            id: req.params.id
        }
    })

    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.send('User does not exist');
        }
    })
    .catch(error => {
        res.send('error: ' + error)
    })
})

router.post('/', function(req, res, next) {
    if (!req.body.name) {
        res.status(400)
        res.json({
         error: 'Bad Data' 
        })
    } else {
        User.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.json('error: ' + error)
        })
    }
})

router.delete('/:id', function(req, res, next) {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.json({ status: 'User Deleted!'})
    })
    .catch(error => {
        res.send('error:' + error)
    })
})

router.put('/:id', function(req, res, next) {
    if (!req.body.name) {
        res.status(400)
        res.json({
            error: 'Bad Data'
        })
    } else {
        User.update(
            { name: req.body.name },
            { where: { id: req.params.id } }
        )
        .then(() => {
           res.json({ status: 'User Updated!'}) 
        })
        .error(error => handleError(error))
    }
})

module.exports = router