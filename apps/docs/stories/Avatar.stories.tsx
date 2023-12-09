import React from 'react';
import { Avatar, type AvatarProps } from '@mvst/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l', 'xl'],
    }
  }
} as Meta;

export default meta;

type Story = StoryObj<AvatarProps>;

export const Primary: Story = {
  render: (props) => (
    <div className="text-red-700">
      <Avatar
        {...props}
      />
    </div>
  ),
  name: 'Avatar',
  args: {
    size: 'l',
    src: 'https://i.pravatar.cc/300'
  },
};