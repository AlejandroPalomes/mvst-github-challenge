import React, { FC } from 'react';
// import styled from '@emotion/styled';
// import { useFormContext } from 'react-hook-form';
// import { InputBase } from './components/InputBase';
// import { Label } from './components/Label';
// import { Error } from './components/Error';

// const Container = styled.div`
//   width: 100%;
// `;

export interface InputProps {
  name: string;
  label?: string;
  type?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  onBlur?: (newValue: string) => void;
  onChange?: (newValue: string) => void;
  onFocus?: (newValue: string) => void;
  showErrors?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    name,
    // label,
    // onChange,
    // onBlur,
    // onFocus,
    // showErrors = true,
    // ...rest
    //TODO: Add other props (iconLeft, iconRight, tooltip, help, ...)
  } = props;

  // const { register, formState: { errors } } = useFormContext();
  // const inputError = errors[name];
  // const registerRef = Boolean(ref) ? { ref } : register(name);

  // const handleOnChange = (event) => {
  //   onChange?.(event.currentTarget.value);
  // };

  // const handleOnFocus = (event) =>
  //   onFocus?.(event.currentTarget.value);

  // const handleOnBlur = (event) => {
  //   return onBlur?.(event);
  // };

  return (
    <input
      name={name}
      type="input"
    />
    // <Container>
    //   {label && <Label htmlFor={name}>{label}</Label>}
    //   <InputBase
    //     {...rest}
    //     {...registerRef}
    //     id={name}
    //     name={name}
    //     onChange={handleOnChange}
    //     onBlur={handleOnBlur}
    //     onFocus={handleOnFocus}
    //     hasErrors={Boolean(inputError)}
    //   />
    //   {showErrors && <Error inputError={inputError}/>}
    // </Container>
  );
};

// Input.displayName = "Input";
