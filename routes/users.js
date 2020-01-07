require('dotenv').config();

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const connection = require("../config/connection");


const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");


router.post("/create", (req, res) => {
  // Form validation
  
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  connection.query(`SELECT email FROM users WHERE email = ?`,[req.body.email], (err, results) => {
      if (err) {
        res.status(500).send("Email already exists");
      } else {
        //res.json(results);
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err);
            newUser.password = hash;
            newUser
              .save()
              .then(results => res.json(results))
              .catch(err => console.log(err));
          });
        });
      }
    });
 
});


router.get('/', async (req, res) => {
  const {
    _start, _end, _order, _sort, q
  } = req.query;
  try {
    const { count, rows } = await User.findAndCountAll({
      q: q,
      limit: _end - _start,
      offset: Number(_start),
      order: [
        [_sort, _order],
      ],
    });
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  await User.findOne({
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


router.post('/', async (req, res) => {
  await User.findAll({
    where: {
      id: req.params.id,
    },
  })
  console.log(req.body);
  if (!req.body.name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
  }
  await User.create(req.body)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      res.json(`error: ${error}`);
    });
});


router.delete('/:id', async (req, res) => {
  await User.destroy({
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


router.put('/:id', async (req, res) => {
  const {
    name, email, phone, company,
  } = req.body;
  const { errors, isValid } = validateLoginInput(req.body);
    
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  await User.update(
    {
      name, email, phone, company,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.json({ status: 'User Updated!' });
    });
});

module.exports = router;
