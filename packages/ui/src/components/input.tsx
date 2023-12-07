import { type FC } from 'react';

export interface InputProps {
  name?: string;
  onChange?: (newValue: string) => void;
  onFocus?: () => void;
  placeholder?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {
    name,
    onChange,
    onFocus,
    placeholder
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleOnFocus = () => {
    onFocus && onFocus();
  }

  return (
    <input
      className="w-full rounded-md py-1 px-3"
      name={name}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      placeholder={placeholder}
      type="input"
    />
  );
};
