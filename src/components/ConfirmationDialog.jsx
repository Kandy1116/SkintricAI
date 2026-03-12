import React from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ onAllow, onDeny }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-content">
          <p>ALLOW A.I. TO ACCESS YOUR CAMERA</p>
        </div>
        <div className="dialog-actions">
          <button onClick={onDeny} className="deny-button">DENY</button>
          <button onClick={onAllow} className="allow-button">ALLOW</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;