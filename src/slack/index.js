import hello from "./messages/hello";
import button from "./actions/button";
import appHomeOpened from "./events/app-home-opened";
import createSurvey from "./actions/create-survey";
import createSurveyView from "./views/create-survey-view";

const components = [
  hello,
  button,
  appHomeOpened,
  createSurvey,
  createSurveyView,
];

export function slackEvents(app) {
  components.forEach((component) => component(app));
}
