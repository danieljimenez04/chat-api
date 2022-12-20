const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileImage: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[2,16]
        }
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Users