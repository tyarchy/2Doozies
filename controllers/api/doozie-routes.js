const router = require('express').Router();
const { Doozie, User } = require('../../models');

// GET - display all doozies
router.get('/', (req, res) => {
  Doozie.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'due_date',
    ],
  })
    .then((dbDoozieData) => res.json(dbDoozieData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Doozie.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'description',
      'due_date',
    ]
  })
  .then(dbDoozieData => {
    if (!dbDoozieData) {
      res.status(404).json({ message: 'No to-do found with this id' });
      return;
    }
    res.json(dbDoozieData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST - create new doozie
router.post('/', (req, res) => {
  console.log(req.body)
  Doozie.create(
    req.body
  )
  .then(dbDoozieData => res.json(dbDoozieData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT - update a doozie
router.put('/:id', (req, res) => {
  Doozie.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then((dbDoozieData) => {
      if (!dbDoozieData[0]) {
        res.status(404).json({ message: 'No to-do found with this id' });
        return;
      }
      res.json(dbDoozieData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE doozie
router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Doozie.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDoozieData) => {
      if (!dbDoozieData) {
        res.status(404).json({ message: 'No to-do found with this id' });
        return;
      }
      res.json(dbDoozieData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
