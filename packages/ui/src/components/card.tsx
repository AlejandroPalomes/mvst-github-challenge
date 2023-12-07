import React, { type FC } from "react";

interface CardProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ onClick, children }) => {

  const handleOnClick = () => {
    onClick && onClick();
  }

  return (
    <div
      className="p-4 rounded-md bg-customGray-700"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
}
