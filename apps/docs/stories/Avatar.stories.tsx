import { Avatar, AvatarProps } from '@mvst-ui';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Avatar/Avatar',
  component: Avatar
  // decorators: [(Story) => <div style={{ width: '300px' }}><Story/></div>]
} as Meta;

type Story = StoryObj<AvatarProps>;

export const Primary: Story = {
  render: (props) => (
    <Avatar
      {...props}
    />
  ),
  name: "Avatar",
  args: {
    size: "l",
    src: "https://github.githubassets.com/favicons/favicon-dark.svg"
  },
};