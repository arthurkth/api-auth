import UserService from "../services/UserService.js";

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }
  login = async (request, reply) => {
    try {
      const token = await this.userService.auth(request.body);
      return reply.status(200).send({ token });
    } catch (error) {
      return reply.status(400).send({ error: error.message });
    }
  };
  logout = async (request, reply) => {
    return reply.send({ token: null });
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
    try {
      if (!request.params.id) {
        return reply.status(400).send({ error: "Informe um ID válido." });
      }
      await this.userService.update(request.params.id, request.body);
      return reply
        .status(200)
        .send({ success: "Usuário atualizado com sucesso" });
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  };
  delete = async (request, reply) => {
    try {
      if (!request.params.id) {
        return reply.status(400).send({ error: "Informe um ID válido." });
      }
      await this.userService.remove(request.params.id);
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  };

  authRouteExample = async (request, reply) => {
    return reply
      .status(200)
      .send({ auth: true, message: "You can access this route!" });
  };
}
