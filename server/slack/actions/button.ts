import { App } from "@slack/bolt";

export default function button(app: App) {
  app.action("button_click", async ({ body, ack, say }) => {
    // Acknowledge the action
    ack();
    say(`<@${body.user.id}> clicked the button`);
  });
}
