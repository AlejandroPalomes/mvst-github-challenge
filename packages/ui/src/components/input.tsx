export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export function Input({ children, ...other }: InputProps): JSX.Element {
  return (
    <input type="input" {...other}>
      {children}
    </input>
  );
}

Input.displayName = "Input";
