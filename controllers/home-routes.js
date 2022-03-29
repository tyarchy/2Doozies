const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Doozie } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    Doozie.findAll({
      attributes: ['title', 'description', 'created_at'],
    })
      .then((dbDoozieData) => {
        const doozie = dbDoozieData.map((doozie) =>
          doozie.get({ plain: true })
        );

        res.render('dashboard', { doozie, loggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.render('login');
  }
});

module.exports = router;
