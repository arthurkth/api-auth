import User from "../models/User.js";

export default class UserRepository {
  create = async ({ id, email, password }) => {
    try {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        throw new Error("O e-mail informado já existe.");
      }
      await User.create({ id, email, password });
    } catch (error) {
      throw new Error(`Erro ao adicionar o usuário - ${error.message} `);
    }
  };

  getByEmail = async (email) => {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new error("Usuário não encontrado.");
    }
  };
}
