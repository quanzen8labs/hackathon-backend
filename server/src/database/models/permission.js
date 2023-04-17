"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Permission.init(
    {
      name: DataTypes.STRING,
      resource: DataTypes.STRING,
      type: DataTypes.STRING,
      isAllowed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Permission",
    }
  );
  return Permission;
};
