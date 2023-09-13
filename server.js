import Fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const fastify = Fastify({
  logger: true,
});

let database = new DatabaseMemory();

fastify.get("/", (request, reply) => {
  return reply.send("home");
});

fastify.post("/create", (request, reply) => {
  let { email, password } = request.body;
  let user = database.create({
    email,
    password,
  });

  return reply.status(201).send({ user });
});

fastify.post("/login", (request, reply) => {
  return reply.send("login");
});

fastify.get("/logout", (request, reply) => {
  return reply.send("logout");
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
