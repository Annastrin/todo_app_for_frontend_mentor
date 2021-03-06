import { Story } from "@storybook/react";
import { Header } from "../components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Header",
  component: Header,
  decorators: [
    (StoryComponent: Story) => (
      <div style={{ backgroundColor: "blue" }}>
        <StoryComponent />
      </div>
    ),
  ],
  argTypes: {},
};

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
