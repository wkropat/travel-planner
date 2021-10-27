const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
  name:{
      type:DataTypes.STRING
  },
  species:{
      type:DataTypes.STRING
  },
  age:{
      type:DataTypes.INTEGER
  },
},{
    sequelize, 
});

module.exports=Trip