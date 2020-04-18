import SurveyModal from "../blocks/survey-modal";

export default function createSurvey(app) {
  app.action("createSurvey", ({ ack, body }) => {
    // Acknowledge the button request
    ack();
    try {
      const result = app.client.views.open({
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload
        view: SurveyModal({}),
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
}
