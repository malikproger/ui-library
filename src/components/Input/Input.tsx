import { CSSProperties } from 'react';
import './Input.css';

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
  style?: CSSProperties;
};
function Input({ onChange, name, placeholder, value = '', style }: Props) {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      style={style}
      className="input"
    />
  );
}

export default Input;
