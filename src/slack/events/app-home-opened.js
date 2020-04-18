import HomeView from "../blocks/home-view";

export default function appHomeOpened(app) {
  app.event("app_home_opened", async ({ event }) => {
    console.log("event", event);
    try {
      /* view.publish is the method that your app uses to push a view to the Home tab */
      await app.client.views.publish({
        /* the user that opened your app's app home */
        user_id: event.user,
        /* the view payload that appears in the app home*/
        view: {
          type: "home",
          callback_id: "home_view",
          /* body of the view */
          blocks: HomeView({}),
        },
      });
    } catch (error) {
      console.error(error);
    }
  });
}
