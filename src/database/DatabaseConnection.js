import { Sequelize } from "sequelize";
import config from "../../config.js";

class DatabaseConnection {
  constructor() {
    const { database, username, password, configs } = config.development;

    this.sequelize = new Sequelize(database, username, password, configs);
    this.start();
  }

  async start() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }
  }
}

export default DatabaseConnection;
