const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      res.header('Access-Control-Expose-Headers', 'X-Total-Count');
      res.header('X-Total-Count', 19);
      res.json(users);
    })
    .catch((error) => {
      res.json(`error: ${error}`);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })

    .then((user) => {
      if (!user) {
        return res.status(404).send('User does not exist');
      }
      res.json(user);
    })
    .catch((error) => {
      res.send(`error: ${error}`);
    });
});

router.post('/', (req, res) => {
  if (!req.body.name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
  }
  User.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.json(`error: ${error}`);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json({ status: 'User Deleted!' });
    })
    .catch((error) => {
      res.send(`error:${error}`);
    });
});

router.put('/:id', (req, res) => {
  if (!req.body.name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
  }
  User.update(
    { name: req.body.name },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.json({ status: 'User Updated!' });
    });
});

module.exports = router;
