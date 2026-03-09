import React from 'react';
import Header from './Header';
import BackButton from './BackButton';
import './InputPage.css'; // Reusing styles for squares and animations

const AnalysisPage = ({ onBack }) => {
  return (
    <div className="intro-page">
      <Header />
      <div className="instruction">TO START ANALYSIS</div>

      <div className="flex items-center justify-center h-full w-full gap-32">
        
        {/* Left Option */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Squares */}
          <div className="square square1" style={{ position: 'absolute', width: '380px', height: '380px' }}></div>
          <div className="square square2" style={{ position: 'absolute', width: '500px', height: '500px' }}></div>
          <div className="square square3" style={{ position: 'absolute', width: '500px', height: '500px', animationDelay: '0.5s' }}></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-32 h-32 rounded-full border-2 border-black flex items-center justify-center">
              <i className="fa-solid fa-camera text-5xl"></i>
            </div>
            <div className="text-center">
              <p className="font-semibold">ALLOW A.I.</p>
              <p className="text-sm">TO SCAN YOUR FACE</p>
            </div>
          </div>
        </div>

        {/* Right Option */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Squares */}
          <div className="square square1" style={{ position: 'absolute', width: '380px', height: '380px' }}></div>
          <div className="square square2" style={{ position: 'absolute', width: '500px', height: '500px' }}></div>
          <div className="square square3" style={{ position: 'absolute', width: '500px', height: '500px', animationDelay: '0.5s' }}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-32 h-32 rounded-full border-2 border-black flex items-center justify-center">
              <i className="fa-solid fa-image-portrait text-5xl"></i>
            </div>
            <div className="text-center">
              <p className="font-semibold">ALLOW A.I.</p>
              <p className="text-sm">ACCESS GALLERY</p>
            </div>
          </div>
        </div>

      </div>

      <BackButton onClick={onBack} />
    </div>
  );
};

export default AnalysisPage;
