import { Spinner, type IconProps } from '@mvst/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40, 60]
    },
  }
} as Meta;

export default meta;

type Story = StoryObj<IconProps>;

export const Primary: Story = {
  render: (props) => (
    <div className="text-red-700">
      <Spinner
        {...props}
      />
    </div>
  ),
  name: 'Spinner',
  args: {
    size: 60,
    color: 'black'
  },
};