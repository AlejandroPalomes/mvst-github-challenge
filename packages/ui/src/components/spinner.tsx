import { type FC } from 'react';
import { type IconProps } from '../utils/icon-utils';

export const Spinner: FC<IconProps> = ({ color = 'white', size = 24}) => {
  return (
    <svg
      enableBackground="new 0 0 0 0"
      id="L9"
      version="1.1"
      viewBox="0 0 100 100"
      width={size}
      x="0px"
      y="0px"
    >
    <path
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      fill={color}
    >
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         dur="1s" 
         from="0 50 50"
         repeatCount="indefinite"
         to="360 50 50" 
         type="rotate"
      />
  </path>
</svg>
  );
};
