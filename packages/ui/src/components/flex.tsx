import React, { type FC } from "react";

interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  gap?: ''
  children: React.ReactNode;
}

export const Flex: FC<FlexProps> = ({
  direction = 'row',
  wrap = 'wrap',
  children
}) => {

  return (
    <div
      className="flex"
    >
      {children}
    </div>
  );
}
