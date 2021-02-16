import React from 'react';
import {Header} from '../components/Header';

export default {
  title: 'Header',
  component: Header,
  decorators: [story => <div style={{ backgroundColor: 'blue' }}>{story()}</div>],
  argTypes: {
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
};