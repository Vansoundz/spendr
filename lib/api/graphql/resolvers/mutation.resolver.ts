import { budgetMutationResolver } from "./budget.resolver";
import { categoryMutationResolver } from "./category.resolver";
import { userMutationResolver } from "./user.resolver";
import { spendingMutationResolver } from "./spending.resolver";

const mutationResolver = {
  ...budgetMutationResolver,
  ...categoryMutationResolver,
  ...spendingMutationResolver,
  ...userMutationResolver,
};

export default mutationResolver;
