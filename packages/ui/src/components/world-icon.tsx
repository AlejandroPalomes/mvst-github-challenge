import { type FC } from 'react';
import { type IconProps } from '../utils/icon-types';
import { getStrokeWidth } from '../utils/icon-helper';

export const WorldIcon: FC<IconProps> = ({ size = 24, color = 'white' }) => {
  const strokeWidth = getStrokeWidth(size);
  return <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      d="M20.4711 10.9999C20.4711 16.2307 16.2307 20.4711 10.9999 20.4711M20.4711 10.9999C20.4711 5.76918 16.2307 1.52881 10.9999 1.52881M20.4711 10.9999H1.52881M10.9999 20.4711C5.76918 20.4711 1.52881 16.2307 1.52881 10.9999M10.9999 20.4711C13.8671 20.4711 16.1916 16.2307 16.1916 10.9999C16.1916 5.76913 13.8671 1.52881 10.9999 1.52881M10.9999 20.4711C8.13279 20.4711 5.80865 16.2307 5.80865 10.9999C5.80865 5.76913 8.13279 1.52881 10.9999 1.52881M10.9999 20.4711V1.52881M1.52881 10.9999C1.52881 5.76918 5.76918 1.52881 10.9999 1.52881M18.26 4.86275C16.5226 5.99823 13.915 6.72016 10.9998 6.72016C8.08464 6.72016 5.47707 5.99823 3.7397 4.86275M3.73992 17.1371C5.4773 16.0017 8.08487 15.2797 11.0001 15.2797C13.9153 15.2797 16.5228 16.0017 18.2602 17.1371"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>;
};
