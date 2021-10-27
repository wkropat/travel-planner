const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init({
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

module.exports=Traveller