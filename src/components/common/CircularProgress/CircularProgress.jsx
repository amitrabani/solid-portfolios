import React from 'react';

import { Container, CircularLoader } from './circularProgressStyles';


const CircularProgress = () => (
  <div style={{ margin: '11em' }}>
    <Container>
      <div className="loader">
        <CircularLoader viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#fcc117e3"
            strokeWidth="3"
          />
        </CircularLoader>
      </div>
    </Container>
  </div>
);
export default CircularProgress;
