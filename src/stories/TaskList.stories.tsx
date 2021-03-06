import { Story } from "@storybook/react";
import { TaskList, TaskListProps } from "../components/TaskList/TaskList";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TaskList",
  component: TaskList,
  argTypes: {
    onToggleTaskState: { action: "clicked" },
    onRemoveTask: { action: "removed" },
    onShowAll: { action: "show all tasks" },
    onShowActive: { action: "show active tasks" },
    onShowCompleted: { action: "show completed tasks" },
    onClearCompleted: { action: "clear completed tasks" },
  },
};

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      name: "Todo1",
      id: 0,
      completed: false,
    },
    {
      name: "Todo2",
      id: 1,
      completed: true,
    },
  ],
  activeFilter: "all",
};
