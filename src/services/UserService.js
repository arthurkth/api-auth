import UserRepository from "../repositories/UserRepository.js";
import validator from "validator";
import { randomUUID } from "crypto";
import * as argon2 from "argon2";

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  add = async ({ email, password }) => {
    if (!validator.isEmail(email)) {
      throw new Error("Formato de e-mail inválido.");
    }
    if (!validator.isLength(password, { min: 6 })) {
      throw new Error("A senha deve conter no mínimo 6 caracteres.");
    }
    try {
      const hash = await argon2.hash(password);
      await this.userRepository.create({
        id: randomUUID(),
        email,
        password: hash,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
}
