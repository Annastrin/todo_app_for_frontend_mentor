import React from "react";
import { Provider } from "react-redux";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { App } from "../components/App/App";
import * as TaskListStories from "./TaskList.stories";

const store: any = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args?.tasks,
      activeFilter: TaskListStories.Default.args?.activeFilter,
    };
  },
  subscribe: () => 0,
  dispatch: (reduxAction: any) => {
    const handler = action(reduxAction.type);
    handler(reduxAction);
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "App",
  component: App,
  decorators: [
    (StoryComponent: () => React.ReactElement) => (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    ),
  ],
  argTypes: {
    onToggleTaskState: { action: "clicked" },
    onRemoveTask: { action: "removed" },
    onShowAll: { action: "show all tasks" },
    onShowActive: { action: "show active tasks" },
    onShowCompleted: { action: "show completed tasks" },
    onClearCompleted: { action: "clear completed tasks" },
  },
};

const Template: Story = (args) => <App {...args} />;
export const Default = Template.bind({});
