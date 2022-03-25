const router = require('express').Router();

const doozieRoutes = require('./doozie-routes.js');

router.use('/doozies', doozieRoutes);

module.exports = router;