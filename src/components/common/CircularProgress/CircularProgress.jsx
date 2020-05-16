import React from 'react';
import './circularProgressStyles.css';


const CircularProgress = () => (
  <div style={{ margin: '11em' }}>
    <div className="profile-main-loader">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#fcc117e3"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  </div>
);
export default CircularProgress;
