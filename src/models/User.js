import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();

export default User;
