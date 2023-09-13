import { randomUUID } from "crypto";

export class DatabaseMemory {
  #users = new Map();

  create(user) {
    const userId = randomUUID();

    this.#users.set(userId, user);
  }
}
