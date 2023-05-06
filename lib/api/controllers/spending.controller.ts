import { ISpending } from "@/lib/models";
import { Spending } from "../db";

const createSpending = async (spending: Partial<ISpending>) => {
  if (!spending.date) spending.date = new Date().toISOString();
  const b = await Spending.create(spending);
  return b;
};

const getSpendings = async () => {
  const items = await Spending.findAll();
  return items;
};

const getSpending = async (id: string) => {
  const item = await Spending.findByPk(id);
  return item;
};

const updateSpending = async (id: string, spending: Partial<ISpending>) => {
  const b = await Spending.update(spending, { where: { id } });
  return b;
};

const getSpendingsWhere = async (budgetId: string) => {
  const items = await Spending.findAll({ where: { budgetId } });
  return items;
};

export {
  createSpending,
  getSpendings,
  getSpending,
  updateSpending,
  getSpendingsWhere,
};
