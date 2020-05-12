import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from '../../assets';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  className?: string;
  onClick?: () => (void);
  size?: 'sm';
  type?: 'button' | 'submit';
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ children, size, style, className, type, onClick }) => (
  <ButtonContainer
    type={type}
    style={style}
    className={`generic-button ${buttonSizes[size || 'sm']} ${className || ''}`}
    onClick={onClick}
  >
    {children}
  </ButtonContainer>
);

const buttonSizes = {
  sm: {
    height: '36px',
    width: '109px',
  },
};

const ButtonContainer = styled.button`
  background-color: ${colors.cornflowerBlue};
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${fonts.fontSm};
  font-weight: 400;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  text-align: center;
  user-select: none;
  vertical-align: middle;

  &:hover {
    background-color: ${colors.azureRadiance};
  }
`;
export default Button;
