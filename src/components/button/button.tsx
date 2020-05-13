import React from 'react';

type ButtonPropsTheme = 'primary' | 'secondary' | 'tertiary' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  className?: string;
  onClick?: () => (void);
  size?: 'sm' | 'lg';
  theme?: ButtonPropsTheme;
  type?: 'button' | 'submit';
  wide?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, theme, size, className, type, onClick }) => (
  <button
    type={type}
    className={`btn btn-${theme} btn-${size} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: 'sm',
  theme: 'primary',
  type: 'button',
};

export default Button;
