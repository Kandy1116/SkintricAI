import React from 'react';
import Header from './Header';

const ThankYouPage = ({ onProceed, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans p-4 relative overflow-hidden">
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 tracking-wider">Thank you!</h1>
          <p className="text-xs text-gray-400 tracking-widest">PROCEED FOR THE NEXT STEP</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center space-x-3 text-sm font-semibold">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition-colors -rotate-45">
              <i className="fa-solid fa-chevron-left rotate-45"></i>
          </div>
          <span>BACK</span>
        </button>
        <button onClick={onProceed} className="flex items-center space-x-3 text-sm font-semibold">
          <span>PROCEED</span>
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition-colors -rotate-45">
              <i className="fa-solid fa-chevron-right rotate-45"></i>
          </div>
        </button>
      </footer>
    </div>
  );
};

export default ThankYouPage;
