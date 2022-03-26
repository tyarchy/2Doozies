const User = require("./User");
const Doozie = require("./Doozie");

// Create associations.
User.hasMany(Doozie, {
  foreignKey: "User_id",
});

Doozie.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { User, Doozie };
