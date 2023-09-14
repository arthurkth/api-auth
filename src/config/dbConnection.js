import { Sequelize } from "sequelize";

class DatabaseConnection {
  constructor(database, username, password, configs) {
    this.sequelize = new Sequelize(database, username, password, configs);
    this.start();
    this.sequelize.sync();
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
