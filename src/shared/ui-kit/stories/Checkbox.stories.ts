import { Checkbox } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Checkbox label',
  },
};

export const DefaultChecked: Story = {
  args: {
    children: 'Checkbox default checked',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Checkbox disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    children: 'Checkbox default checked and disabled',
  },
};
