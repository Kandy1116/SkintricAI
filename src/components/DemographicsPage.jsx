import React, { useState } from 'react';
import Header from './Header';
import BackButton from './BackButton';
import './DemographicsPage.css';

// Mock data is used as a fallback if props are not provided during development
const mockDemographics = {
  race: {
    "East asian": 0.70,
    "Southeast asian": 0.19,
    "White": 0.08,
    "Black": 0.01,
    "South asian": 0,
    "Latino hispanic": 0,
    "Middle eastern": 0,
  },
  age: {
    "25-34": 0.8856,
    "35-44": 0.0379,
    "18-24": 0.0326,
    "45-54": 0.0272,
  },
  gender: {
    "Male": 0.6944,
    "Female": 0.3056,
  },
};

const CategoryNav = ({ activeCategory, setActiveCategory, demographics, overrides }) => {
  const categories = ['RACE', 'AGE', 'GENDER'];

  if (!demographics) return null; // Defensive check

  return (
    <div className="category-nav">
      {categories.map(category => {
        const categoryData = demographics[category.toLowerCase()];
        if (!categoryData || Object.keys(categoryData).length === 0) {
          return (
            <div key={category} className={`category-nav-item ${activeCategory === category ? 'active' : ''}`}>
              <span className="top-pick">-</span>
              <span className="category-name">{category}</span>
            </div>
          );
        }
        const overriddenKey = overrides[category];
        const topPick = (overriddenKey && categoryData[overriddenKey] !== undefined)
          ? overriddenKey
          : Object.keys(categoryData).reduce((a, b) => categoryData[a] > categoryData[b] ? a : b);
        return (
          <div
            key={category}
            className={`category-nav-item ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="top-pick">{topPick}</span>
            <span className="category-name">{category}</span>
          </div>
        );
      })}
    </div>
  );
};

const ConfidenceList = ({ category, data, activeKey, onSelectItem }) => {
  if (!data || Object.keys(data).length === 0) {
    return <div className="confidence-list-empty">No data available.</div>;
  }
  const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a);

  return (
    <div className="confidence-list">
      <div className="confidence-header">
        <span>{category}</span>
        <span>A.I. CONFIDENCE</span>
      </div>
      <ul className="confidence-items">
        {sortedData.map(([key, value]) => (
          <li 
            key={key} 
            className={key === activeKey ? 'active-item' : ''}
            onClick={() => onSelectItem(key)}
          >
            <span><i className="fa-solid fa-diamond"></i> {key}</span>
            <span>{(value * 100).toFixed(0)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DemographicsPage = ({ demographics: propDemographics, onBack, onHome }) => {
  const [activeCategory, setActiveCategory] = useState('RACE');
  const [overrides, setOverrides] = useState({});
  
  const demographics = propDemographics || mockDemographics;

  if (!demographics) {
    return <div>Loading...</div>;
  }

  const handleSelectItem = (key) => {
    setOverrides(prev => ({ ...prev, [activeCategory]: key }));
  };

  const getTopResult = (category) => {
    const categoryData = demographics[category.toLowerCase()];
    if (!categoryData || Object.keys(categoryData).length === 0) {
      return { key: 'N/A', value: 0 };
    }

    const overriddenKey = overrides[category];
    if (overriddenKey && categoryData[overriddenKey] !== undefined) {
      return { key: overriddenKey, value: categoryData[overriddenKey] };
    }

    const topKey = Object.keys(categoryData).reduce((a, b) => categoryData[a] > categoryData[b] ? a : b);
    return { key: topKey, value: categoryData[topKey] };
  };

  const topResult = getTopResult(activeCategory);
  const activeCategoryData = demographics[activeCategory.toLowerCase()];

  return (
    <div className="demographics-v2-page">
      <Header />
      <div className="demographics-header-section">
        <p className="ai-analysis-text">A.I. ANALYSIS</p>
        <h1 className="demographics-title">DEMOGRAPHICS</h1>
        <p className="predicted-race-age">PREDICTED RACE & AGE</p>
      </div>
      
      <div className="demographics-main-content">
        <CategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} demographics={demographics} overrides={overrides} />
        
        <div className="demographics-center-content">
          <h2 className="top-result-text">{topResult.key}</h2>
          <div className="circle-progress-container">
            <svg className="circle-progress-svg" viewBox="0 0 100 100">
              <circle className="progress-background" cx="50" cy="50" r="45"></circle>
              <circle 
                className="progress-bar" 
                cx="50" 
                cy="50" 
                r="45"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={(2 * Math.PI * 45) * (1 - topResult.value)}
              >
              </circle>
            </svg>
            <span className="progress-text">{(topResult.value * 100).toFixed(0)}%</span>
          </div>
        </div>

        <ConfidenceList category={activeCategory} data={activeCategoryData} activeKey={topResult.key} onSelectItem={handleSelectItem} />
      </div>

      <div className="demographics-footer">
        <BackButton onClick={onBack} />
        <p className="footer-instruction">If A.I. estimate is wrong, select the correct one.</p>
        <div className="home-button" onClick={onHome}>
          <span>HOME</span>
          <div className="diamond-shape">
            <span><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsPage;
