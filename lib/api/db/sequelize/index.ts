import { Sequelize } from "sequelize";

const database = process.env.NEXT_PUBLIC_DB;
const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const host = process.env.NEXT_PUBLIC_SERVER;

const sequelize = new Sequelize({
  database,
  username,
  password,
  dialect: "postgres",
  host,
  ssl: true,
});

export default sequelize;
