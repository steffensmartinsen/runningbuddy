import React from 'react';
import './App.css';

function App() {
  return (
    <div className='mainContainer'>
      <div className='mainContent'>
        <h1>Running Buddy</h1>
        <p>Calculations for your running needs</p>
        <div className="calculationContainer">
          <div className="leftContainer">
            Distance
          </div>
          <div className="centerContainer">
            Pace
          </div>
          <div className="rightContainer">
            Time
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
