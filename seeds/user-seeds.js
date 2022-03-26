const sequelize = require("../config/connection");
const { User } = require("../models");
//we may need to add Doozie above with User

const userData = [
  {
    first_name: "jimmy",
    last_name: "hoffa",
    email: "test@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
