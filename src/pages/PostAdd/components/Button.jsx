import React from 'react';
import './Button.scss';

const Button = ({ type, navigate, text, validation }) => {
  return (
    <button className={type} onClick={navigate} disabled={validation}>
      {text}
    </button>
  );
};

export default Button;
