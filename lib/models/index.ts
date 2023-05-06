interface ICategory {
  id: string;
  name: string;
  date: string;
  description: string;
  color: string;
}

interface IBudget {
  id: string;
  name: string;
  date: string;
  categoryId: string;
  amount: number;
  description: string;
  color: string;
}

interface ISpending {
  id: string;
  date: string;
  budgetId: string;
  amount: number;
  description: string;
}

type Where = {
  key: string;
  value: string | number;
};

interface User {
  id: string;
  token: string;
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  updated_at: string;
  user_id: string;
  last_ip: string;
  last_login: string;
  logins_count: number;
}

export type { ICategory, IBudget, ISpending, Where, User };
