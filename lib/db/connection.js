const Redis = require("ioredis");

class DB {
  _redis = new Redis({
    password: process.env.REDIS_PASS || "",
  });

  get redis() {
    return this._redis;
  }

  getInstance() {
    return this._redis;
  }

  setInstance(options = {}) {
    this._redis = new Redis(options);
    return this._redis;
  }
}

export const instance = new DB();
export const { redis } = instance;
