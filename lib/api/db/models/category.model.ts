import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../sequelize";

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.UUID,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      max: 256,
    },
  },
  color: {
    type: DataTypes.STRING,
    validate: {
      max: 24,
    },
  },
});

export default Category;
