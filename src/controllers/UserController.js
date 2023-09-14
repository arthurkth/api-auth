import { randomUUID } from "crypto";
import User from "../models/User.js";

class UserController {
  async login(req, reply) {
    User.create({
      id: randomUUID(),
      email: "teste@gmail.com",
      password: "1234",
    });
    reply.send("Login");
  }
  async logout(req, reply) {
    reply.send("Logout");
  }
  async create(req, reply) {
    reply.send("Create");
  }
  async update(req, reply) {
    reply.send("Update");
  }
  async delete(req, reply) {
    reply.send("Delete");
  }
}

export default UserController;
