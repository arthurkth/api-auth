import { DataTypes } from "sequelize";
import DatabaseConnection from "../config/dbConnection.js";
import config from "../config/config.js";
const { database, username, password, configs } = config.development;
const sequelize = new DatabaseConnection(database, username, password, configs)
  .sequelize;

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
