import UserService from "../services/UserService.js";
export default class UserController {
  constructor() {
    this.userService = new UserService();
  }
  login = async (request, reply) => {
    reply.send("Login");
  };
  logout = async (request, reply) => {
    reply.send("Logout");
  };
  create = async (request, reply) => {
    try {
      await this.userService.add(request.body);
      return reply.status(201).send({ success: "Usuário criado com sucesso" });
    } catch (error) {
      return reply.status(400).send({ error: error.message });
    }
  };
  update = async (request, reply) => {
    reply.send("Update");
  };
  delete = async (request, reply) => {
    reply.send("Delete");
  };
}
