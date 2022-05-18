import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WorkingHours from './WorkingHours';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WorkingHours',
  component: WorkingHours,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof WorkingHours>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WorkingHours> = (args) => <WorkingHours {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [
    { key: 'mon', name: 'Monday', ranges: [] },
    { key: 'tue', name: 'Tuesday', ranges: [{from: '05:30', to: '07:30'}, {from: '13:30', to: '15:30'}] },
    { key: "wed", name: "Wednesday", ranges: []},
    { key: "thu", name: "Thursday", ranges: [] },
    { key: "fri", name: "Friday" , ranges: [] },
    { key: "sat", name: "Saturday" , ranges: []},
    { key: "sun", name: "Sunday" , ranges: [{from: '05:00', to: '05:30'}, {from: '13:30', to: '14:00'}]}
  ],
  onChange: (data) => console.log(data)
};

/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};*/
