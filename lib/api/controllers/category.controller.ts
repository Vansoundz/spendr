import { ICategory } from "@/lib/models";
import { Category } from "../db";

const createCategory = async (category: Partial<ICategory>) => {
  if (!category.date) category.date = new Date().toISOString();
  const c = await Category.create(category);
  return c;
};

const getCategories = async () => {
  const items = await Category.findAll();
  return items;
};

const getCategory = async (id: string) => {
  const item = await Category.findByPk(id);
  return item;
};

const updateCategory = async (id: string, category: Partial<ICategory>) => {
  const c = await Category.update(category, { where: { id } });
  return c;
};

export { createCategory, getCategories, getCategory, updateCategory };
