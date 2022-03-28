const sequelize = require("../config/connection");
const { User } = require("../models");
//we may need to add Doozie above with User

const userdata = [
  {
    user_name: "Jimmy Johns",
    email: "test@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
