import Budget from "./models/budget.model";
import Category from "./models/category.model";
import Spending from "./models/spending.model";
import sequelize from "./sequelize";

// Define associations
Category.hasMany(Budget, { foreignKey: "categoryId" });
Budget.belongsTo(Category, { foreignKey: "categoryId" });

Budget.hasMany(Spending, { foreignKey: "budgetId" });
Spending.belongsTo(Budget, { foreignKey: "budgetId" });

// Synchronize the models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });

export { Category, Budget, Spending, sequelize };
