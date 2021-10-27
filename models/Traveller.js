const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model { }

Traveller.init({
    id: {
        // PRIMARY KEY
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    age: {
        type: DataTypes.INTEGER
    },
}, {
    sequelize,
});

module.exports = Traveller
