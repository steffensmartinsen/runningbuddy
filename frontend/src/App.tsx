import { useState } from 'react';
import './App.css';
import DistanceHandler from './components/distance';
import { distanceClassname, paceClassname, timeClassname } from './utils/helpers';

function App() {

  const [distanceSelected, setDistanceSelected] = useState(false);
  const [paceSelected, setPaceSelected] = useState(false);
  const [timeSelected, setTimeSelected] = useState(false);

  const handleDistanceSelected = () => {
    setDistanceSelected(true);
    setPaceSelected(false);
    setTimeSelected(false);
    console.log("Distance selected");
  }

  const handlePaceSelected = () => {
    setDistanceSelected(false);
    setPaceSelected(true);
    setTimeSelected(false);
    console.log("Pace selected");
  }

  const handleTimeSelected = () => {
    setDistanceSelected(false);
    setPaceSelected(false);
    setTimeSelected(true);
    console.log("Time selected");
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
          <div className="calculationContent">
            {distanceSelected && <DistanceHandler />}
          </div>
      </div>
    </div>
  );
}

export default App;
