import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Camera from './Camera';

const ImageUpload = ({ onUpload, isLoading }) => {
  const [preview, setPreview] = useState(null);
  const [mode, setMode] = useState('upload'); // 'upload' or 'camera'

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        const base64String = reader.result.split(',')[1];
        onUpload(base64String);
      };
      reader.readAsDataURL(file);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: 'image/*',
    multiple: false,
  });

  const handleCapture = (base64String) => {
    const imageSrc = `data:image/jpeg;base64,${base64String}`;
    setPreview(imageSrc);
    onUpload(base64String);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button onClick={() => setMode('upload')} className={`px-4 py-2 rounded-lg ${mode === 'upload' ? 'bg-blue-600 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>Upload Photo</button>
        <button onClick={() => setMode('camera')} className={`px-4 py-2 rounded-lg ${mode === 'camera' ? 'bg-blue-600 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>Take Selfie</button>
      </div>

      {mode === 'upload' ? (
        <div 
          {...getRootProps()} 
          className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}>
          <input {...getInputProps()} />
          {isLoading ? (
            <p className="text-gray-600">Analyzing...</p>
          ) : preview ? (
            <img src={preview} alt="Preview" className="max-h-60 mx-auto rounded-lg" />
          ) : (
            <p className="text-gray-500">Drag & drop an image here, or click to select one.</p>
          )}
        </div>
      ) : (
        <Camera onCapture={handleCapture} />
      )}
    </div>
  );
};

export default ImageUpload;
