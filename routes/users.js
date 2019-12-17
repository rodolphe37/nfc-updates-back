const express = require('express');
const router = express.Router();
const User = require('../models/User');

 router.get('/', async (req, res) => {
   const { _start, _end } = req.query
  
   await User.findAll({
     limit: _end - _start,
    
   })
     .then((users) => {
       res.header('Access-Control-Expose-Headers', 'X-Total-Count');
       res.header('X-Total-Count', 100);
       res.json(users);
       
      
     })
     .catch((error) => {
       res.json(`error: ${error}`);
     });
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
  console.log(req.body)
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

router.put('/:id', async (req, res,) => {
  const { name, email, phone, company } = req.body;
  if (!name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
  }
  await User.update(
    {  name, email, phone, company },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.json({ status: 'User Updated!' });
    });
});

module.exports = router;
