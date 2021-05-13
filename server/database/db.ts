import { Sequelize } from "sequelize";
import config from "config";

export const sequelize = new Sequelize(
  config.get("DB_NAME"),
  config.get("DB_USER"),
  config.get("DB_PASSWORD"),
  {
    dialect: "postgres",
    host: config.get("DB_HOST"),
    port: 5432,
  }
);
