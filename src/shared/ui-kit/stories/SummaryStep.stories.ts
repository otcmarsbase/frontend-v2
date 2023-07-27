import type { Meta, StoryObj } from '@storybook/react';
import { SummaryStep } from '../components/SummaryStep';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Form/SummaryStep',
  component: SummaryStep,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SummaryStep>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    stepData: {
      id: 1,
      label: 'Project info',
    },
    isSuccessFilled: false,
    fields: [],
    width: '200px',
  },
};

export const SuccessFilled: Story = {
  args: {
    stepData: {
      id: 1,
      label: 'Project info',
    },
    fields: [
      { name: 'Name', value: 'Dogecoin' },
      { name: 'Type', value: 'Equity' },
    ],
    isSuccessFilled: true,
    width: '200px',
  },
};
