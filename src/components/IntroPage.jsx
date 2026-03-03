import React, { useState } from 'react';

const IntroPage = ({ onContinue, onBack }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onContinue(name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans p-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Introduce Yourself</h1>
        <p className="text-gray-600 mb-8">What's your name?</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              type="button"
              onClick={onBack}
              className="w-full px-6 py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-colors"
            >
              Back
            </button>
            <button 
              type="submit" 
              disabled={!name.trim()}
              className="w-full px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntroPage;
