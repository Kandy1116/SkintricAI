import React from 'react';
import './BackButton.css';

const BackButton = ({ onClick, variant }) => {
  const buttonClass = `back-button ${variant === 'white' ? 'back-button-white' : ''}`;

  return (
    <div className={buttonClass} onClick={onClick}>
      <div className="diamond-shape">
        <span>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
      </div>
      <span>BACK</span>
    </div>
  );
};

export default BackButton;
