import React from 'react';
import Header from './Header';
import BackButton from './BackButton';
import './InputPage.css'; // Reusing styles for squares and animations

const AnalysisPage = ({ onBack }) => {
  return (
    <div className="intro-page flex flex-col">
      <Header />
      <div className="instruction">TO START ANALYSIS</div>

      <div className="flex-grow flex items-center justify-around">
        
        {/* Left Option */}
        <div className="relative w-[335px] h-[335px] flex items-center justify-center">
          {/* Squares */}
          <div className="square square1" style={{ position: 'absolute', width: '255px', height: '255px' }}></div>
          <div className="square square2" style={{ position: 'absolute', width: '335px', height: '335px' }}></div>
          <div className="square square3" style={{ position: 'absolute', width: '335px', height: '335px', animationDelay: '0.5s' }}></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 cursor-pointer">
                                                                        <div className="w-48 h-48 rounded-full border border-gray-100 flex items-center justify-center p-[4%]">
              <div className="w-full h-full rounded-full border-2 border-black flex items-center justify-center">
                <i className="fa-solid fa-camera-retro text-[81px]"></i>
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold">ALLOW A.I.</p>
              <p className="text-sm">TO SCAN YOUR FACE</p>
            </div>
          </div>
        </div>

        {/* Right Option */}
        <div className="relative w-[335px] h-[335px] flex items-center justify-center">
          {/* Squares */}
          <div className="square square1" style={{ position: 'absolute', width: '255px', height: '255px' }}></div>
          <div className="square square2" style={{ position: 'absolute', width: '335px', height: '335px' }}></div>
          <div className="square square3" style={{ position: 'absolute', width: '335px', height: '335px', animationDelay: '0.5s' }}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 cursor-pointer">
                                                                        <div className="w-48 h-48 rounded-full border border-gray-100 flex items-center justify-center p-[4%]">
              <div className="w-full h-full rounded-full border-2 border-black flex items-center justify-center">
                <i className="fa-solid fa-image text-[81px]"></i>
              </div>
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
