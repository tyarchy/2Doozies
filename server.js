const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/api');
// const schedule = require('node-schedule');

const app = express ();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
