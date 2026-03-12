import React, { useEffect } from 'react';
import Header from './Header';
import './InputPage.css';

const ProcessingPage = ({ onProcessed }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onProcessed();
    }, 4000); // Set timer for 4 seconds

    return () => clearTimeout(timer);
  }, [onProcessed]);

  return (
    <div className="intro-page processing-page">
      <Header />

      <div className="center-wrapper">
        <div className="square square1"></div>
        <div className="square square2"></div>
        <div className="square square3"></div>

        <div className="loader-container">
          <p className="processing-text">Processing submission</p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingPage;
