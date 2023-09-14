import User from "../models/User.js";

export default class UserRepository {
  create = async ({ id, email, password }) => {
    try {
      if (User.findOne({ where: { email } })) {
        throw new Error("O e-mail informado já existe.");
      }
      await User.create({ id, email, password });
    } catch (error) {
      throw new Error(`Erro ao adicionar o usuário no banco - ${error} `);
    }
  };
}
