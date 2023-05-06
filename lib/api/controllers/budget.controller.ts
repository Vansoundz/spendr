import { IBudget } from "@/lib/models";
import { Budget } from "../db";

const createBudget = async (budget: Partial<IBudget>) => {
  if (!budget.date) budget.date = new Date().toISOString();

  const b = await Budget.create(budget);
  return b;
};

const getBudgets = async () => {
  const items = await Budget.findAll();
  return items;
};

// const getBudgetsWhere = async (categoryId: string) => {
//   const where = { categoryId };
//   const items = await getItemsWhere("budget", where);
//   return items;
// };

const getBudget = async (id: string) => {
  const item = await Budget.findByPk(id);
  return item;
};

const updateBudget = async (id: string, budget: Partial<IBudget>) => {
  const b = await Budget.update(budget, { where: { id } });
  return b;
};

export { createBudget, getBudgets, getBudget, updateBudget };
