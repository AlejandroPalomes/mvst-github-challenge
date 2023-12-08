import { type FC } from 'react';
import { type IconProps } from '../utils/icon-types';
import { getStrokeWidth } from '../utils/icon-helper';

export const FolderIcon: FC<IconProps> = ({ color = 'white', size = 24}) => {
  const strokeWidth = getStrokeWidth(size);

  return <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0072 6.19808L11.7749 4.91872C11.2094 4.33167 10.4294 4 9.61425 4H5.5C4.39543 4 3.5 4.89543 3.5 6V8.3072M13.0072 6.19808H18.6634C19.768 6.19808 20.6634 7.09351 20.6634 8.19808V19.1858C20.6634 19.738 20.2157 20.1858 19.6634 20.1858H4.5C3.94771 20.1858 3.5 19.738 3.5 19.1858V8.3072M13.0072 6.19808L10.4359 8.10972C10.2634 8.23795 10.0542 8.3072 9.83929 8.3072H3.5"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </svg>
  ;
};
