class UserController {
  async login(req, reply) {
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
