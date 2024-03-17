import type { Meta, StoryObj } from '@storybook/react';

import { WithSingleSelect } from './WithSingleSelect';

const meta: Meta<typeof WithSingleSelect> = {
  component: WithSingleSelect,
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

export const holidaysWeekends: Story = {
  args: {
    holidays: true,
    weekends: true,
  },
};
