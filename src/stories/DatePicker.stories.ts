import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
