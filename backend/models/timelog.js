'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TimeLog extends Model {
    static associate(models) {
      // Define association with User
      TimeLog.belongsTo(models.User, { foreignKey: 'userId' });
      TimeLog.hasMany(models.Break, { foreignKey: 'timeLogId' });
      TimeLog.hasOne(models.LateLog, { foreignKey: 'timeLogId' });
    }
  }
  TimeLog.init({
    timeLogId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      unique: true,
      allowNull: false
    },
    clockIn: {
      type: DataTypes.TIME,
      allowNull: false
    },
    clockOut: {
      type: DataTypes.TIME,
      allowNull: true
    },
    totalHours: {
      type: DataTypes.TIME,
      allowNull: true
    },
    breakDuration: {
      type: DataTypes.TIME,
      allowNull: true
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    onBreak: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE(6)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(6)
    }
  }, {
    sequelize,
    modelName: 'TimeLog',
  });
  return TimeLog;
};
