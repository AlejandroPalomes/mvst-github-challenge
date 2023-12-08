import { type FC } from "react";

interface DividerProps {
  color?: 700 | 600 | 500 | 400 | 300 | 200 | 100
}

export const Divider: FC<DividerProps> = ({ color = 700}) =>
  <div className={`h-px w-full bg-customGray-${color}`}/>;
