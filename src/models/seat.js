'use strict';
const {
  Model
} = require('sequelize');

const {Enums}=require('../utils/common')
const {BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM_ECONOMY}=Enums.SEAT_TYPE
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Aeroplane,{
        foreignKey:'aeroplaneId'
      })
      // define association here
    }
  }
  Seat.init({
    aeroplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false
    },
    class: {
      type:DataTypes.ENUM,
      values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue:ECONOMY
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};