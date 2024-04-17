'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Break extends Model {
    static associate(models) {
      // Define association with TimeLog
      Break.belongsTo(models.TimeLog, { foreignKey: 'timeLogId' });
    }
  }
  Break.init({
    breakId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    timeLogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TimeLogs',
        key: 'timeLogId'
      }
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true
    },
    description: {
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
    modelName: 'Break',
  });
  return Break;
};
