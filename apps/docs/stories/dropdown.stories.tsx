import React from 'react';
import { Dropdown, type DropdownType } from '@mvst/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["searcher", "static"],
    },
  }
};

export default meta;

type Story = StoryObj<DropdownType>;

export const Primary: Story = {
  render: (props) => (
    <div className="w-48 h-56">
      <Dropdown
        {...props}
      >
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
        <Dropdown.Item>Option 4</Dropdown.Item>
        <Dropdown.Item>Option 5</Dropdown.Item>
        <Dropdown.Item>Option 6</Dropdown.Item>
      </Dropdown>
    </div>
  ),
  name: "Dropdown",
  args: {
    placeholder: 'Select an option...',
    dropLimit: true
  },
};