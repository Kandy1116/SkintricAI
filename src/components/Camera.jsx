import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    onCapture(imageSrc.split(',')[1]);
  }, [webcamRef, onCapture]);

  const retake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'user', aspectRatio: 1 }}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {capturedImage ? (
          <button onClick={retake} className="px-6 py-2 bg-gray-700 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-800">
            Retake
          </button>
        ) : (
          <button 
            onClick={capture} 
            aria-label="Capture photo"
            className="w-16 h-16 bg-white rounded-full border-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-blue-500"
          ></button>
        )}
      </div>
    </div>
  );
};

export default Camera;
