import budget from "./budget.schema";
import category from "./category.schema";
import mutation from "./mutation.schema";
import query from "./query.schema";
import spending from "./spending.schema";
import user from "./user.schema";

const typeDefs = [category, budget, spending, query, mutation, user];

export default typeDefs;
