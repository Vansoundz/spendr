import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../sequelize";

const Spending = sequelize.define("spending", {
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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    validate: {
      notEmpty: true,
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  budgetId: {
    type: DataTypes.UUID,
    references: {
      model: {
        tableName: "budget",
      },
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

export default Spending;
