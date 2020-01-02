const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const {
    _start, _end, _order, _sort,
  } = req.query;

  try {
    const { count, rows } = await User.findAndCountAll({
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
  if (!req.body.name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
  }
  await User.create(req.body)
    .then((data) => {
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
  if (!name) {
    res.status(400);
    return res.json({
      error: 'Bad Data',
    });
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
