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

router.get('/dashboard', (req, res) => { });

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    Doozie.findAll({
      attributes: ['id', 'title', 'description', 'created_at'],
    })
      .then((dbDoozieData) => {
        let doozie = dbDoozieData.map((doozie) =>
          doozie.get({ plain: true })
        );

        console.log(doozie)
        res.render('dashboard', {doozie, loggedIn: true, userid: req.session.user_id});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);pu
      });
  } else {
    res.render('login');
  }
});

module.exports = router;
