const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
// Initialize Product model (table) by extending off Sequelize's Model class
class Category extends Model {}
// set up fields and rules for Category model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
