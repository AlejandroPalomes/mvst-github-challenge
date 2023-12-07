import { type FC } from 'react';
import { type IconProps, getStrokeWidth } from '../utils/icon-utils';

export const BuildingIcon: FC<IconProps> = ({ color = 'white', size = 24}) => {
  const strokeWidth = getStrokeWidth(size);

  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4744 7.54607V4.57677C14.4744 4.03014 14.0312 3.58701 13.4846 3.58701H4.57668C4.03005 3.58701 3.58691 4.03014 3.58691 4.57677V19.4233C3.58691 19.9699 4.03005 20.413 4.57668 20.413H14.4744V18.4335M12.4948 10.5154V11.5051M12.4948 14.4744V15.4642M16.4539 10.5154V11.5051M16.4539 14.4744V15.4642M8.53575 20.413H19.4232C19.9698 20.413 20.413 19.9699 20.413 19.4233V8.53584C20.413 7.98921 19.9698 7.54607 19.4232 7.54607H9.52552C8.97888 7.54607 8.53575 7.98921 8.53575 8.53584V20.413Z"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
