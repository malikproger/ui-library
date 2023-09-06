import { useState } from 'react';
import './Modal.css';
import Button from '../Button/Button';

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
  children?: React.ReactNode;
};

const Modal = ({ active, setActive, children }: Props) => {
  return (
    <div>
      <Button className="open-btn" onClick={() => setActive(true)}>
        Open
      </Button>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
