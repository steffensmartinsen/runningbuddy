import { useState } from 'react';
import './App.css';
import DistanceHandler from './components/distance';
import PaceHandler from './components/pace';
import TimeHandler from './components/time';
import { distanceClassname, paceClassname, timeClassname } from './utils/helpers';

function App() {

  const [distanceSelected, setDistanceSelected] = useState(false);
  const [paceSelected, setPaceSelected] = useState(false);
  const [timeSelected, setTimeSelected] = useState(false);

  const handleDistanceSelected = () => {
    if (distanceSelected) {
      setDistanceSelected(false);
      console.log("Distance de-selected");
    } else {
      setDistanceSelected(true);
      setPaceSelected(false);
      setTimeSelected(false);
      console.log("Distance selected");
    }
  }

  const handlePaceSelected = () => {
    if (paceSelected) {
      setPaceSelected(false);
      console.log("Pace de-selected");
    } else {
      setPaceSelected(true);
      setDistanceSelected(false);
      setTimeSelected(false);
      console.log("Pace selected");
    }
  }

  const handleTimeSelected = () => {
    if (timeSelected) {
      setTimeSelected(false);
      console.log("Time de-selected");
    } else {
      setTimeSelected(true);
      setDistanceSelected(false);
      setPaceSelected(false);
      console.log("Time selected");
    }
  }

  return (
    <div className='mainContainer'>
      <div className='mainContent'>
        <h1 className="title">Running Buddy</h1>
        <p className="slogan">Calculations for your running needs</p>
        <div className="calculationContainer">
          <div className={distanceClassname({ distanceSelected} )} 
          onClick={handleDistanceSelected}
          >
            <p className="tabHeader">Distance</p>
          </div>
          <div className={paceClassname({ paceSelected })} 
          onClick={handlePaceSelected}
          >
            <p className="tabHeader">Pace</p>
          </div>
          <div className={timeClassname({ timeSelected })} 
          onClick={handleTimeSelected}
          >
            <p className="tabHeader">Time</p>
          </div>
        </div>
        {(distanceSelected || paceSelected || timeSelected) && (
          <div className="calculationContent">
            {distanceSelected && <DistanceHandler />}
            {paceSelected && <PaceHandler />}
            {timeSelected && <TimeHandler />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
