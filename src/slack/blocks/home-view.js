/** @jsx JSXSlack.h */

import JSXSlack, {
  Blocks,
  Button,
  Divider,
  Actions,
  Section,
} from "@speee-js/jsx-slack";

export default function HomeView({ name }) {
  return (
    <Blocks>
      <Actions>
        <Button actionId="createSurvey" value="value" style="primary">
          Create a survey ❤️
        </Button>
        <Button actionId="createAnnouncement" value="value">
          Create an announcement
        </Button>
      </Actions>
      <Divider />
      {name ? (
        <Section>
          Hello, <b>{name}</b>!
        </Section>
      ) : null}
    </Blocks>
  );
}
