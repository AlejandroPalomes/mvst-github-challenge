import { type FC } from 'react';
import { type IconProps, getStrokeWidth } from '../utils/icon-utils';

export const LocationIcon: FC<IconProps> = ({ color = 'white', size = 24 }) => {
  const strokeWidth = getStrokeWidth(size);

  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 20 20"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7624 7.63206C11.7624 8.60554 10.9733 9.3947 9.99981 9.3947C9.02633 9.3947 8.23717 8.60554 8.23717 7.63206C8.23717 6.65858 9.02633 5.86942 9.99981 5.86942C10.9733 5.86942 11.7624 6.65858 11.7624 7.63206Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path 
        d="M9.9998 2.80981C8.30949 2.80981 6.79838 3.68728 5.80511 5.06004C4.22682 7.24135 5.31186 10.141 6.68661 12.456L9.24202 16.7591C9.58354 17.3342 10.4161 17.3342 10.7576 16.7591L13.313 12.456C14.6877 10.141 15.7728 7.24135 14.1945 5.06004C13.2012 3.68728 11.6901 2.80981 9.9998 2.80981Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
