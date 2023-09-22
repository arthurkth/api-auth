import User from "../models/User.js";

export default class UserRepository {
  create = async ({ id, email, password }) => {
    try {
      const userExists = await this.getByEmail(email);
      if (userExists) {
        throw new Error("O e-mail informado já existe.");
      }
      await User.create({ id, email, password });
    } catch (error) {
      throw new Error(`Erro ao adicionar o usuário - ${error.message} `);
    }
  };

  update = async ({ id, email, password }) => {
    try {
      const user = await this.getById(id);
      if (!user) {
        throw new error("Usuário não encontrado.");
      }
      await user.update({ email, password }, { where: { id } });
    } catch (error) {
      throw new Error("Ocorreu um erro ao atualizar o usuário.");
    }
  };

  remove = async (id) => {
    try {
      const user = await this.getById(id);
      if (!user) {
        throw new error("Usuário não encontrado.");
      }
      await user.destroy();
    } catch (error) {
      throw new Error(`Houve um erro ao excluir o usuário - ${error}`);
    }
  };

  getByEmail = async (email) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error("Usuário não encontrado.");
      }
      return user;
    } catch (error) {
      throw new Error(`Houve um erro ao buscar o usuário - ${error}`);
    }
  };

  getById = async (id) => {
    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw new Error("Usuário não encontrado.");
      }
      return user;
    } catch (error) {
      throw new Error(`Houve um erro ao buscar o usuário - ${error}`);
    }
  };
}
