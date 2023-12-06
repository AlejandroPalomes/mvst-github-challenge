import { type FC } from 'react';

const AvatarSizes = ['s', 'm', 'l', 'xl'];
type AvatarSize = typeof AvatarSizes[number];

const getSize = (size: AvatarSize) => {
  switch (size) {
    case 's':
      return 'w-6 h-6'
    case 'l':
      return 'w-20 h-20'
    case 'xl':
      return 'w-32 h-32'
    case 'm':
    default:
      return 'w-10 h-10'
  }
}

export interface InputProps {
  src: string;
  size?: AvatarSize;
}

export const Avatar: FC<InputProps> = ({ src, size = 'm'}) => {
  
  return (
    <img
      alt="Avatar"
      className={`rounded-full ${getSize(size)}`}
      src={src}
    />
  );
};
