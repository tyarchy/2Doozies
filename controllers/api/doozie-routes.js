const router = require('express').Router();
const { Doozie } = require('../../models');

// GET - display all doozies
router.get('/', (req, res) => {
  Doozie.findAll()
    .then((dbDoozieData) => res.json(dbDoozieData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST - create new doozie
router.post('/Doozie', (req, res) => {
  Doozie.create({
    User_id: req.body.User_id,
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date,
  })
    .then(dbDoozieData => {
      req.session.save(() => {
        req.session.user_id = dbDoozieData.id;
        req.session.User_id = dbUserData.User_id;
        req.session.loggedIn = true;

        res.json(dbDoozieData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT - update a doozie
router.put('/:id', (req, res) => {
  Doozie.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
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
