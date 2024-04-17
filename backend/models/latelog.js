'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LateLog extends Model {
    static associate(models) {
      // Define association with TimeLog
      LateLog.belongsTo(models.TimeLog, { foreignKey: 'timeLogId' });
    }
  }
  LateLog.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    timeLogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'TimeLogs',
        key: 'timeLogId'
      }
    },
    lateTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'LateLog',
  });
  return LateLog;
};
