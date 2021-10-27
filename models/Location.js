const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { }

Location.init({
    // id: {
    //     // PRIMARY KEY
    //     type: DataTypes.INTEGER,
    //     primaryKey
    // },
    location_name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
});

module.exports = Location
