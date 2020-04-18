/** @jsx JSXSlack.h */

import JSXSlack, {
  Modal,
  Section,
  Divider,
  Input,
  ConversationsSelect,
  ChannelsSelect,
  UsersSelect,
  Select,
  Option,
  CheckboxGroup,
  Checkbox,
} from "@speee-js/jsx-slack";

export default function SurveyModal({}) {
  return (
    <Modal
      title="Create a new Survey"
      close="Cancel"
      callbackId="createSurveyView"
    >
      <Section>
        <p>
          :point_right::skin-tone-2: Surveys are great for Standups, Team
          feedback and much more.
        </p>
      </Section>
      <Divider />
      <Input
        blockId="nameBlock"
        actionId="nameInput"
        type="text"
        name="subject"
        label="Enter a name of the survey"
        placeholder="Name"
        required
      />
      {/* <ChannelsSelect name="shareWith" label="Broadcast channel" required />
      <UsersSelect name="userSelect" label="Add participants" multiple />
      <Select actionId="rating" label="Schedule period">
        <Option value="0">One time (not repeating)</Option>
        <Option value="1">Weekly</Option>
        <Option value="2">2 week period</Option>
        <Option value="3">3 week period</Option>
        <Option value="4">4 week period</Option>
      </Select>
      <CheckboxGroup actionId="todo" label="Choose days">
        <Checkbox value="1" checked>
          Monday
        </Checkbox>
        <Checkbox value="2" checked>
          Tuesday
        </Checkbox>
        <Checkbox value="3" checked>
          Wednesday
        </Checkbox>
        <Checkbox value="4" checked>
          Thursday
        </Checkbox>
        <Checkbox value="5" checked>
          Friday
        </Checkbox>
        <Checkbox value="6">Saturday</Checkbox>
        <Checkbox value="7">Sunday</Checkbox>
      </CheckboxGroup> */}
      <Input type="hidden" name="postId" value="xxxx" />
      <Input type="submit" value="Create" />
    </Modal>
  );
}
