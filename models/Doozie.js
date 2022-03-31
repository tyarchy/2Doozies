const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// Create doozie model. Leave now for placeholder.
class Doozie extends Model {}

// Create columns for doozie model
Doozie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      notNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    User_id: {
      type: DataTypes.INTEGER,
      notNull: true,
      foreignKey: true,
    },
    title: {
      type: DataTypes.STRING,
      notNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Doozie',
  }
);

module.exports = Doozie;
