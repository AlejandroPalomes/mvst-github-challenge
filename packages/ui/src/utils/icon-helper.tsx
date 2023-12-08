import { type IconSize } from './icon-types';

export const getStrokeWidth = (size: IconSize): number => {
  switch (size) {
    case 16:
      return 2;
    case 20:
      return 1.68;
    case 24:
      return 1.5;
    case 32:
      return 1.6;
    case 40:
      return 1.02;
    case 60:
      return 1;
    default:
      throw new Error(`Invalid size: ${size}`);
  }
};