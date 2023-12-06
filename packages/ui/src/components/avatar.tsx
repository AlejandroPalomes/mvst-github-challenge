import { type FC } from 'react';

const AvatarSizes = ['s', 'm', 'l'];
type AvatarSize = typeof AvatarSizes[number];

export interface InputProps {
  src: string;
  size?: AvatarSize;
}

export const Avatar: FC<InputProps> = ({ src, size}) => {
  
  return (
    <img
      alt="Avatar"
      className="logo"
      src={src}
    />
  );
};
