import Redis from "ioredis";

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

export const redis = new DB().getInstance();
export const subscriber = new DB().getInstance();
