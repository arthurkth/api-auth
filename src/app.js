import Fastify from "fastify";
import sequelize from "./config/dbConnection.js";

class App {
  fastify = Fastify({ logger: true });
  constructor(port, database = {}) {
    this.database = database || sequelize;
    this.PORT = port || 3000;
  }

  async start() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }

    this.fastify.register(import("./routes/index.js"));

    this.fastify.listen({ port: this.PORT }, (err, address) => {
      if (err) {
        this.fastify.log.error(err);
        process.exit(1);
      }
      console.log(`Server is now listening on ${address}`);
    });
  }
}

export default App;
