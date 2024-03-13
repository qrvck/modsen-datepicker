import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '../index';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
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
