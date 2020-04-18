require("dotenv").config();

const next = require("next");
const { App, ExpressReceiver } = require("@slack/bolt");
const { WebClient } = require("@slack/web-api");

const { slackEvents } = require("./src/slack");
const { authorize } = require("./src/slack/autorize");

const { redis, subscriber } = require("./src/db/connection");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = new ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });

  const app = new App({
    authorize,
    receiver: server,
  });
  app.client = new WebClient(process.env.SLACK_BOT_TOKEN);

  slackEvents(app);

  subscriber.subscribe("__keyevent@0__:expired", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("calling callback");
  });
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
