import UserService from "../services/UserService.js";

async function auth(request, reply) {
  const token = request.headers.authorization;
  if (!token) {
    return reply.status(401).send({ error: "Token não informado." });
  }

  const res = new UserService().verifyToken(token.replace("Bearer ", ""));

  if (res === false) {
    return reply.status(500).send({ error: "Token inválido." });
  }
}

export default auth;
