import type { Meta, StoryObj } from '@storybook/react';

import { WithRangeSelect } from './WithRangeSelect';

const meta: Meta<typeof WithRangeSelect> = {
  component: WithRangeSelect,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const minMaxDate: Story = {
  args: {
    maxDate: new Date(2024, 3, 15),
    minDate: new Date(2024, 1, 15),
  },
};

export const todoList: Story = {
  args: {
    todoList: true,
  },
};
