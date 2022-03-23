const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// Create doozie model. Leave now for placeholder.
class Doozie extends Model {
}

// Create columns for doozie model
Doozie.init(
    {
        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            autoIncrement: true,
            PrimaryKey: true
        },
        User_id: {
            type: dataTypes.INTEGER,
            notNull: true,
            foreignKey: true
        },
        title: {
            type: dataTypes.STRING,
            notNull: true,
        },
        description: {
            type: dataTypes.STRING,
        },
        due_date: {
            type: dataTypes.STRING,
            vlaidate: {
                isDate: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Doozie'
    }
);

module.exports = Doozie;