import { budgetQueryResolver } from "./budget.resolver";
import { categoryQueryResolver } from "./category.resolver";
import { userQueryResolver } from "./user.resolver";
import { spendingQueryResolver } from "./spending.resolver";

const queryResolver = {
  ...budgetQueryResolver,
  ...categoryQueryResolver,
  ...spendingQueryResolver,
  ...userQueryResolver,
};

export default queryResolver;
