import { Sequelize } from "sequelize";
import config from "./config.js";

const { database, username, password, configs } = config.development;
const sequelize = new Sequelize(database, username, password, configs);

export default sequelize;
