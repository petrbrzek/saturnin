export default function button(app) {
  app.action("button_click", ({ body, ack, say }) => {
    // Acknowledge the action
    ack();
    say(`<@${body.user.id}> clicked the button`);
  });
}
