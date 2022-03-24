// Package dependencies
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

// Create a user model
class User extends model {
    // Method to check password. We will probably need to change this around. but hold now for a placeholder.
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Create columns for user model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            notNull: true
        },
        email: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            notNull: true,
            validate: {
                len: [6, 18]
            }
        }
    },
    {
        // We will probably need to add hooks to hash password. Leave now for placeholder.
        hooks: {
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;




