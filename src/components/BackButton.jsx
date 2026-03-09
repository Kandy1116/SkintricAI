import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <div className="back-button" onClick={onClick}>
      <div className="diamond">
        <span>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
      </div>
      <span>BACK</span>
    </div>
  );
};

export default BackButton;
