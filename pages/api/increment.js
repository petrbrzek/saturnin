import { redis } from "../../src/db/connection";

export default async (req, res) => {
  const visits = await redis.incr("visit:add");

  res.status(200).json({ visits });
};
