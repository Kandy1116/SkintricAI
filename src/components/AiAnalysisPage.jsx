import React from 'react';
import BackButton from './BackButton';
import Header from './Header';
import './AiAnalysisPage.css';

const AiAnalysisPage = ({ onBack, onGetSummary, onNavigate }) => {
  return (
    <div className="ai-analysis-page">
      <Header />
      <div className="analysis-header">
        <h2>A.I. ANALYSIS</h2>
        <p>A.I. HAS ESTIMATED THE FOLLOWING.</p>
        <p>FIX ESTIMATED INFORMATION IF NEEDED.</p>
      </div>

      <section className="diamond-section">
        <div className="diamond-grid">
          <div className="diamond top darker" onClick={() => onNavigate('demographics')}>
            <span>DEMOGRAPHICS</span>
          </div>
          <div className="diamond left">
            <span>COSMETIC<br/>CONCERNS</span>
          </div>
          <div className="diamond right">
            <span>SKIN TYPE DETAILS</span>
          </div>
          <div className="diamond bottom">
            <span>WEATHER</span>
          </div>
        </div>
      </section>

      <BackButton onClick={onBack} />
      <div className="get-summary-button" onClick={onGetSummary}>
        <span>GET SUMMARY</span>
        <div className="diamond-shape">
          <span>
            <i className="fas fa-play"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AiAnalysisPage;
