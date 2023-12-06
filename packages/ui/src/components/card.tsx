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
      className="p-4 hover:scale-105 rounded-md bg-gray-800 mb-4"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
}
