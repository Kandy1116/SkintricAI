import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import './Camera.css';
import BackButton from './BackButton';

const Camera = ({ onCapture, onBack }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  const handleConfirm = () => {
    onCapture(capturedImage);
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (capturedImage) {
          handleRetake();
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onBack, capturedImage]);

  return (
    <div className="camera-page-container">
      {!capturedImage && <BackButton onClick={onBack} variant="white" />}
      <div className="camera-view-container">
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" className="camera-feed" />
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="camera-feed"
            videoConstraints={{ facingMode: 'user' }}
          />
        )}
      </div>

      {capturedImage ? (
        <div className="camera-controls preview-controls">
          <button onClick={handleRetake}>RETAKE</button>
          <button onClick={handleConfirm}>CONFIRM</button>
        </div>
      ) : (
        <div className="camera-controls capture-controls">
          <button onClick={capture} className="capture-btn">
            <div className="capture-btn-inner"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Camera;
