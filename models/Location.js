const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { }

Location.init({
    location_name: {
        type: DataTypes.STRING
    },   
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'traveller',
          key: 'id',
        },}
}, {
    sequelize,
});

module.exports = Location
