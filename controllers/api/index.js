const router = require('express').Router();

const doozieRoutes = require('./doozie-routes.js');

const userRoutes = require('./user-routes.js');

router.use('/doozies', doozieRoutes);

router.use('/users', userRoutes);

module.exports = router;
