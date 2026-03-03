import { useState } from 'react';
import DemographicsPage from './components/DemographicsPage';
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import CityPage from './components/CityPage';

function App() {
  const [page, setPage] = useState('landing');
  const [userName, setUserName] = useState('');
  const [cityName, setCityName] = useState('');

  const handleIntroContinue = (name) => {
    setUserName(name);
    setPage('city');
  };

  const handleCityContinue = (city) => {
    setCityName(city);
    setPage('demographics');
  };

  const renderPage = () => {
    switch (page) {
      case 'intro':
        return <IntroPage onContinue={handleIntroContinue} onBack={() => setPage('landing')} />;
      case 'city':
        return <CityPage onContinue={handleCityContinue} onBack={() => setPage('intro')} />;
      case 'demographics':
        return <DemographicsPage onBack={() => setPage('city')} userName={userName} />;
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