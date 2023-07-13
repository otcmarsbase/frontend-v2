import type { Meta, StoryObj } from '@storybook/react';
import {Checkbox} from "./Checkbox";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const WithGradient: Story = {

  render: () => <Checkbox checked={true}>Checkbox</Checkbox>
  ,
};
