import { App } from "@slack/bolt";

export default function hello(app: App) {
  app.message("hello", async ({ message, say }) => {
    console.log("vola se");
    // say() sends a message to the channel where the event was triggered
    say({
      text: "",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hey there <@${message.user}>!`,
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click Me",
            },
            action_id: "button_click",
          },
        },
      ],
    });
  });
}
