const express = require('express');
const sequelize = require('./config/connection');
// const schedule = require('node-schedule');
const apiRoutes = require('./controllers/home-routes.js');

const PORT = process.env.PORT || 3001;
const app = express ();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
sequelize.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});