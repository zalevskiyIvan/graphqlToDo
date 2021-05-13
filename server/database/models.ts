import { sequelize } from "./db";

import { DataTypes } from "sequelize";

const Todo = sequelize.define("todos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  todo: { type: DataTypes.STRING, allowNull: false },
  checked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
export default Todo;
