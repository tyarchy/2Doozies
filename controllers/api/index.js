const router = require('express').Router();

const doozieRoutes = require('./doozie-routes.js');

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

router.use('/doozies', doozieRoutes);

module.exports = router;
