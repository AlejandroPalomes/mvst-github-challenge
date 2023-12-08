import { type FC } from 'react';
import { type IconProps } from '../utils/icon-types';
import { getStrokeWidth } from '../utils/icon-helper';

export const EmailIcon: FC<IconProps> = ({ size = 24, color = 'white' }) => {
  const strokeWidth = getStrokeWidth(size);
  return <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      d="M4.22917 5.9438C4.58717 5.60664 5.06951 5.40002 5.6001 5.40002H18.4001C18.9307 5.40002 19.413 5.60664 19.771 5.9438M4.22917 5.9438C4.01946 6.1413 3.85242 6.38359 3.74332 6.65538C3.65093 6.88553 3.6001 7.13684 3.6001 7.40002V16.6C3.6001 17.7046 4.49553 18.6 5.6001 18.6H18.4001C19.5047 18.6 20.4001 17.7046 20.4001 16.6V7.40002C20.4001 7.1145 20.3403 6.84295 20.2325 6.59723C20.1235 6.34899 19.9657 6.1271 19.771 5.9438M4.22917 5.9438L10.7221 11.3377C11.4629 11.9532 12.5372 11.9532 13.2781 11.3377L19.771 5.9438"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>;
};
