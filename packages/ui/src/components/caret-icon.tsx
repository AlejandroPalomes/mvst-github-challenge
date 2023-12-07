import type { FC } from 'react';
import { type IconProps, getStrokeWidth } from '../utils/icon-utils';

interface CaretProps extends IconProps {
  direction: 'down' | 'top' | 'left' | 'right';
}

const Directions = {
  'down': 'rotate-90',
  'left': 'rotate-180',
  'top': '-rotate-90',
  'right': ''
};

export const CaretIcon: FC<CaretProps> = ({ size = 24, direction = 'right', color = "white" }) => {
  const strokeWidth = getStrokeWidth(size);

  return <svg className={`transform ${Directions[direction]} duration-150`} fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.35645 17.9481L14.6437 12L9.35645 6.05182"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>;
};
