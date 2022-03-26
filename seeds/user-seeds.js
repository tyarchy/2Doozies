const sequelize = require('../config/connection');
const { User, Doozie } = require('../models');

const userData = [
    {
        first_name: 'jimmy',
        last_name: 'hoffa',
        email: 'test@email.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;