import hello from "./messages/hello";
import button from "./actions/button";
import appHomeOpened from "./events/app-home-opened";
import createSurvey from "./actions/create-survey";
import createSurveyView from "./views/create-survey-view";
import { App } from "@slack/bolt";

const components = [
  hello,
  button,
  appHomeOpened,
  createSurvey,
  createSurveyView,
];

export function slackEvents(app: App) {
  components.forEach((component) => component(app));
}
