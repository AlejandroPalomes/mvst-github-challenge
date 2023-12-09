import { Icons, getIcon, type IconProps, type IconType } from '@mvst/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Icons',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40, 60]
    },
    direction: {
      control: { type: 'select' },
      options: ['down', 'top', 'left', 'right']
    }
  }
} as Meta;

export default meta;

type Story = StoryObj<IconProps>;

export const Primary: Story = {
  render: (props) => (
    <div className="flex flex-row flex-wrap gap-10">
      {Icons.map((iconName: IconType) => {
      const IconToRender = getIcon(iconName);
      return <div className="flex flex-col items-center gap-2" key={iconName}>
        <div className="p-8 border border-solid border-customGray-200 rounded-lg">
          <IconToRender {...props}/>
        </div>
        <span>{iconName}</span>
      </div>;
    })}
    </div>
  ),
  name: 'Icon',
  args: {
    size: 40,
    color: 'black'
  },
};