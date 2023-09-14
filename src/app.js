import Fastify from "fastify";
import DatabaseConnection from "./config/dbConnection.js";
import config from "./config/config.js";
const { database, username, password, configs } = config.development;
class App {
  #connection = new DatabaseConnection(database, username, password, configs);
  constructor(port) {
    this.PORT = port || 3000;
  }

  start() {
    const fastify = Fastify({
      logger: true,
    });

    this.#connection.start;

    fastify.register(import("./routes/index.js"));

    fastify.listen({ port: this.PORT }, (err, address) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      console.log(`Server is now listening on ${address}`);
    });
  }
}

export default App;
