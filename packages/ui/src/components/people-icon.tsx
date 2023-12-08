import { type FC } from 'react';
import { type IconProps } from '../utils/icon-types';
import { getStrokeWidth } from '../utils/icon-helper';

export const PeopleIcon: FC<IconProps> = ({ size = 24, color = 'white' }) => {
  const strokeWidth = getStrokeWidth(size);
  return <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      d="M14.3151 14.8644C16.4082 14.8644 18.105 13.1676 18.105 11.0744C18.105 8.98128 16.4082 7.28446 14.3151 7.28446C12.2219 7.28446 10.5251 8.98128 10.5251 11.0744C10.5251 13.1676 12.2219 14.8644 14.3151 14.8644ZM14.3151 14.8644C11.1754 14.8644 8.63014 17.4096 8.63014 20.5493M14.3151 14.8644C17.4548 14.8644 20 17.4096 20 20.5493M4 16.7153C4 14.0573 5.67736 11.3872 8.14202 10.7649C6.73981 10.209 5.89498 8.84049 5.89498 7.24039C5.89498 5.14726 7.5918 3.45044 9.68493 3.45044C10.9286 3.45044 12.0324 4.04948 12.7234 4.97476M12.7234 4.97476C12.8692 5.16996 12.8272 5.12501 12.8744 5.20231L12.7234 4.97476Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>;
};
