const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey
    // },
  trip_budget:{
      type:DataTypes.DOUBLE
  },
  traveller_id:{
      //non-unique foreign key that references the Traveller model's id field (Traveller.id)
      type:DataTypes.STRING
  },
  location_id:{
      //non-unique foreign key that references the Location model's id field (Location.id)
      type:DataTypes.INTEGER
  },
},{
    sequelize, 
});

module.exports=Trip
