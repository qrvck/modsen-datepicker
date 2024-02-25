import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'secondary',
  },
};
