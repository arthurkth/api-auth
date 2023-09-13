import Fastify from "fastify";
import DatabaseConnection from "./database/DatabaseConnection.js";

class App {
  #connection = new DatabaseConnection();
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
