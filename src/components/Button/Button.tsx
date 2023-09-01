import React, { CSSProperties } from 'react';
import './Button.css';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  style?: CSSProperties;
}

const Button: React.FC<Props> = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="button">
      {children}
    </button>
  );
};

export default Button;
