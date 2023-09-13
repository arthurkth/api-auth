import UserController from "../controllers/UserController.js";

const userController = new UserController();

const routes = (fastify, opts, done) => {
  fastify.post("/create", userController.create);

  fastify.post("/login", userController.login);

  fastify.get("/logout", userController.logout);

  fastify.put("/update/:id", userController.update);

  fastify.delete("/delete/:id", userController.delete);

  done();
};

export default routes;
