import React, { useEffect } from 'react';
import Header from './Header';

const ProcessingPage = ({ onProcessed, onBack }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onProcessed();
    }, 2500); // Simulate a 2.5-second processing time

    return () => clearTimeout(timer);
  }, [onProcessed]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans p-6 relative">
      <Header />

      {/* Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <p className="text-gray-500 mb-4">Processing submission</p>
        <div className="flex justify-center items-center space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 p-6">
        <button onClick={onBack} className="flex items-center space-x-3 text-sm font-semibold">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition-colors -rotate-45">
              <i className="fa-solid fa-chevron-left rotate-45"></i>
          </div>
          <span>BACK</span>
        </button>
      </footer>
    </div>
  );
};

export default ProcessingPage;
