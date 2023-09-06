import React, { CSSProperties } from 'react';
import './Button.css';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, style, className = '' }) => {
  return (
    <button onClick={onClick} style={style} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
