import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const Camera = ({ onCapture, onBack }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onBack();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onBack]);

  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        height={720}
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: 'user'
        }}
      />
      <div className="camera-controls">
        <button onClick={onBack}>Back</button>
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};

export default Camera;
