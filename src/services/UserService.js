import UserRepository from "../repositories/UserRepository.js";
import validator from "validator";
import { randomUUID } from "crypto";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  auth = async ({ email, password }) => {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      return false;
    }
    const verify = await argon2.verify(user.getDataValue("password"), password);

    if (!verify) {
      throw new Error("E-mail ou senha incorretos.");
    }

    return this.setToken(user.getDataValue("id"));
  };

  add = async ({ email, password }) => {
    if (!validator.isEmail(email)) {
      throw new Error("Formato de e-mail inválido.");
    }
    if (!validator.isLength(password, { min: 6 })) {
      throw new Error("A senha deve conter no mínimo 6 caracteres.");
    }

    const hash = await argon2.hash(password);
    await this.userRepository.create({
      id: randomUUID(),
      email,
      password: hash,
    });
  };

  update = async (id, { email, password }) => {
    if (password) {
      password = await argon2.hash(password);
    }
    await this.userRepository.update({ id, email, password });
  };

  remove = async (id) => {
    await this.userRepository.remove(id);
  };

  setToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.JWT_PRIVATE_KEY, {
      algorithm: "HS256",
      expiresIn: 600,
    });
  };

  verifyToken = (token) => {
    return jwt.verify(
      token,
      process.env.JWT_PRIVATE_KEY,
      function (err, decoded) {
        if (err) {
          return false;
        }
      },
    );
  };
}
