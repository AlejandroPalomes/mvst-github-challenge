export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...other }: ButtonProps): JSX.Element => {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}