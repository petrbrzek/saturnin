import HomeView from "../blocks/home-view";

export default function createSurveyView(app) {
  app.view("createSurveyView", async ({ ack, body, view, context }) => {
    // Acknowledge the view_submission event
    await ack();

    // Do whatever you want with the input data - here we're saving it to a DB then sending the user a verifcation of their submission

    // Assume there's an input block with `block_1` as the block_id and `input_a`
    const val = view["state"]["values"]["nameBlock"]["nameInput"];
    const user = body["user"]["id"];

    try {
      /* view.publish is the method that your app uses to push a view to the Home tab */
      const result = await app.client.views.publish({
        /* the user that opened your app's app home */
        user_id: user,
        /* the view payload that appears in the app home*/
        view: {
          type: "home",
          callback_id: "home_view",
          /* body of the view */
          blocks: HomeView({ name: val.value }),
        },
      });
      console.log("createSurveyView:publish", result);
    } catch (error) {
      console.error(error);
    }

    // try {
    //   const result = await app.client.views.update({
    //     // Pass the view_id
    //     view_id: "home_view",
    //     // View payload with updated blocks
    //     view: {
    //       type: "home",
    //       callback_id: "home_view ",
    //       /* body of the view */
    //       blocks: HomeView({ name: val.value }),
    //     },
    //   });
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
  });
}
