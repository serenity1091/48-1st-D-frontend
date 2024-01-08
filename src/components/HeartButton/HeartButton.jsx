import { useState } from 'react';
import './HeartButton.scss';

const HeartButton = ({ like, onClick }) => {
  return (
    <img
      src={like ? '/images/State=Active-3.png' : '/images/State=Default-3.png'}
      onClick={onClick}
    />
  );
};

export default HeartButton;
