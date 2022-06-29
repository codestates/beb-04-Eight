"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User:Board -> 1:N 관계
      const { User, Board } = models;
      User.hasMany(Board);
    }
  }
  User.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      phone: DataTypes.STRING,
      introduction: DataTypes.STRING,
      address: DataTypes.STRING,
      privateKey: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
