import { App, BlockAction } from "@slack/bolt";

import SurveyModal from "../blocks/survey-modal";

export default function createSurvey(app: App) {
  app.action("createSurvey", async ({ ack, body }) => {
    // Acknowledge the button request
    ack();

    body = body as BlockAction;

    try {
      const result = app.client.views.open({
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload
        view: SurveyModal({}) as any,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
}
