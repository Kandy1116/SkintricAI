import { useState } from 'react';
import DemographicsPage from './components/DemographicsPage';
import LandingPage from './components/LandingPage';
import InputPage from './components/InputPage';
import ProcessingPage from './components/ProcessingPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [page, setPage] = useState('landing');
  const [userName, setUserName] = useState('');
  const [cityName, setCityName] = useState('');

  const handleNameContinue = (name) => {
    setUserName(name);
    setPage('city');
  };

  const handleCityContinue = (city) => {
    setCityName(city);
    
    // Store data in local storage
    localStorage.setItem('skintric_user', JSON.stringify({ name: userName, location: city }));

    // Send data to the backend API
    fetch('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName, location: city }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('API Success:', data);
      // Proceed to the next step
      setPage('processing');
    })
    .catch(error => {
      console.error('API Error:', error);
      // Still proceed to the next step to not block the user
      setPage('processing');
    });
  };

  const renderPage = () => {
    switch (page) {
      case 'intro':
        return <InputPage title="TO START ANALYSIS" placeholder="Introduce Yourself" onContinue={handleNameContinue} onBack={() => setPage('landing')} />;
      case 'city':
        return <InputPage title="WHAT CITY ARE YOU IN?" placeholder="Enter your city" onContinue={handleCityContinue} onBack={() => setPage('intro')} />;
      case 'processing':
        return <ProcessingPage onProcessed={() => setPage('thankyou')} onBack={() => setPage('city')} />;
      case 'thankyou':
        return <ThankYouPage onProceed={() => setPage('demographics')} onBack={() => setPage('processing')} />;
      case 'demographics':
        return <DemographicsPage userName={userName} onBack={() => setPage('thankyou')} />;
      case 'landing':
      default:
        return <LandingPage onTakeTest={() => setPage('intro')} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;