import { type FC } from 'react';

export interface InputProps {
  name: string;
  onChange?: (newValue: string) => void;
}

export const Input: FC<InputProps> = (props) => {
  const {
    name,
    onChange
  } = props;

  const handleOnChange = (event: any) => {
    onChange?.(event.target?.value as string);
  };

  return (
    <div className="w-full relative">
      <input
        className="w-full rounded-md"
        name={name}
        onChange={handleOnChange}
        type="input"
      />
    </div>
  );
};
