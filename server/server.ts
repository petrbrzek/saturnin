require("dotenv").config();

import next from "next";
import { App, ExpressReceiver } from "@slack/bolt";
import { WebClient } from "@slack/web-api";

import { slackEvents } from "./slack";
import { authorize } from "./slack/autorize";

import { redis, subscriber } from "./db/connection";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = new ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET as string,
  });

  const app = new App({
    authorize,
    receiver: server,
  });
  app.client = new WebClient(process.env.SLACK_BOT_TOKEN);

  slackEvents(app);

  // @ts-ignore
  subscriber.subscribe("__keyevent@0__:expired", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("calling callback");
  });

  // @ts-ignore
  subscriber.on("message", function(channel, eventName) {
    console.log("Receive message %s from channel %s", eventName, channel);

    if (eventName === "lool") {
      redis.setex("another", 5, "Ahojky");
    }
  });

  server.app.all("*", (req, res) => {
    return handle(req, res);
  });

  (async () => {
    // Start the app
    await app.start(port);

    console.log(`> Ready on http://localhost:${port}`);
  })();
});
