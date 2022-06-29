"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User:Board -> 1:N 관계
      const { User, Board } = models;
      Board.belongsTo(User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  Board.init(
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Board",
    }
  );
  return Board;
};
