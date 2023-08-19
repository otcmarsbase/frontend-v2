import { LotFlow } from '@shared/types';
import { LotItem } from '@shared/ui-molecules';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'LotFlow/LotItem',
  component: LotItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LotItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ForBuy: Story = {
  args: {
    lotType: 'SAFE',
    direction: 'BUY',
    id: 121212,
    isHot: true,
    fdv: 124738,
    minBidSize: 100000,
    totalBidsPlaced: 100,
    deadline: '24.12.2024',
    asset: {
      name: 'USDT',
      iconName: 'UsdtIcon',
    },
    totalSum: 376534,
    availableSum: 140376,
  },
};

export const ForSell: Story = {
  args: {
    lotType: 'TOKEN_WARRANT',
    direction: 'SELL',
    id: 121212,
    isHot: true,
    fdv: 124738,
    minBidSize: 100000,
    totalBidsPlaced: 100,
    deadline: '24.12.2024',
    asset: {
      name: 'USDT',
      iconName: 'UsdtIcon',
    },
    totalSum: 376534,
    availableSum: 140376,
  },
};
