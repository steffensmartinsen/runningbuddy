import React from 'react';
import PaceInput from './paceInput';
import { FormControl, FormLabel, Switch, Button } from '@chakra-ui/react';
import DistanceInput from './distanceInput';
import * as constants from '../constants';
import './components.css';
import { ValidatePace, ValidateDistance } from '../utils/validation';

const TimeHandler = () => {

    const [paceUnit, setPaceUnit] = React.useState('km');
    const [paceMin, setPaceMin] = React.useState('');
    const [paceSec, setPaceSec] = React.useState('');
    const [fiveK, setFiveK] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null)
    const [tenK, setTenK] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);
    const [halfMarathon, setHalfMarathon] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);
    const [marathon, setMarathon] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);
    const [specifyDistance, setSpecifyDistance] = React.useState(false);
    const [distanceUnit, setDistanceUnit] = React.useState('km');
    const [distance, setDistance] = React.useState('');
    const [customTime, setCustomTime] = React.useState<{ hours: number; minutes: number; seconds: number } | null>(null);
    const [response, setResponse] = React.useState(false);
    const [errorMessages, setErrorMessages] = React.useState('');

    const handleClick = () => {

        // Check if the pace input is valid
        if (!ValidatePace(paceMin, paceSec)) {
            setErrorMessages('Invalid input');
            setResponse(false);
            return;
        }

        if (response) {
            setResponse(false);
        }

        if (!specifyDistance) {
            
            // Create the data object to send to the backend
            const data = {
                unit: paceUnit,
                min: Number(paceMin),
                sec: Number(paceSec)
            }

            // Send the data object to the backend
            fetch(constants.ENDPOINTS.TIME, {
                method: constants.HTTP_METHOD.POST,
                headers: {
                    'Content-Type': constants.CONTENT_TYPE.JSON,
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed.');
            })
            .then(data => {
                console.log(data);
                setResponse(true);
                setFiveK(data.fiveK);
                setTenK(data.tenK);
                setHalfMarathon(data.halfMarathon);
                setMarathon(data.marathon);
                setErrorMessages('');
            })
            .catch(error => {
                console.error(error);
            });

        } else {

            // Validate the distance input
            if (!ValidateDistance(distance)) {
                setErrorMessages('Invalid input');
                setResponse(false);
                return;
            }

            // Create the data object to send to the backend
            const data = {
                distanceUnit: distanceUnit,
                distance: Number(distance),
                min: Number(paceMin),
                sec: Number(paceSec),
                paceUnit: paceUnit
            }

            // Send the data object to the backend
            fetch(constants.ENDPOINTS.SPECIFIEDDISTANCE, {
                method: constants.HTTP_METHOD.POST,
                headers: {
                    'Content-Type': constants.CONTENT_TYPE.JSON,
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed.');
            })
            .then(data => {
                console.log(data);
                setResponse(true);
                setCustomTime(data);
                setErrorMessages('');
            })
        }
    }

    return (
        <>
            <h1 className="tabH1">Calculate Times</h1>
            <p className="explanation">Provide the running pace to calculate the times on the 5K, 10K, half-marathon
                and marathon distances. 
                <br></br>
                Check the <i>Specified Distance</i> box to specify a distance.
            </p>

            <PaceInput
            paceMin={paceMin}
            paceSec={paceSec}
            metric={paceUnit}
            setMin={setPaceMin}
            setSec={setPaceSec}
            setMetric={setPaceUnit}
            />

            <FormControl className="switchContainer">
                <FormLabel className="switchLabel">Specified Distance</FormLabel>
                <Switch colorScheme="red" onChange={() => {
                    setSpecifyDistance(!specifyDistance);
                    setResponse(false);
                    setErrorMessages('');
                }} />
            </FormControl>

            {specifyDistance && (
                <DistanceInput
                unit={distanceUnit} 
                distance={distance} 
                setDistance={setDistance} 
                setUnit={setDistanceUnit} 
                />
            )}

            <Button 
            colorScheme='red' 
            className="calculateButton" 
            size='md' 
            onClick={handleClick}
            onTouchEnd={handleClick}
            >
                Calculate
            </Button>

            {errorMessages && (
                <div className="errorContainer">
                    <p className="errorText">{errorMessages}</p>
                </div>
            )}

            {response && !specifyDistance && (
                <div className="multiTimeContainer">
                    <div className="resultContainer">
                        <p className="resultText">5K:</p> 
                        <p className='result'>{fiveK?.hours}:{fiveK?.minutes}:{fiveK?.seconds}</p>
                    </div>
                    <div className="resultContainer">
                        <p className="resultText">10K:</p> 
                        <p className='result'>{tenK?.hours}:{tenK?.minutes}:{tenK?.seconds}</p>
                    </div>
                    <div className="resultContainer">
                        <p className="resultText">Half Marathon:</p> 
                        <p className='result'>{halfMarathon?.hours}:{halfMarathon?.minutes}:{halfMarathon?.seconds}</p>
                    </div>
                    <div className="resultContainer">
                        <p className="resultText">Marathon:</p> 
                        <p className='result'>{marathon?.hours}:{marathon?.minutes}:{marathon?.seconds}</p>
                    </div>
                </div>
            )}

            {response && specifyDistance && (
                <div className="resultContainer">
                    <p className="resultText">Time:</p> 
                    <p className="result">{customTime?.hours}:{customTime?.minutes}:{customTime?.seconds}</p>
                </div>    
            )}
        </>
    )
}

export default TimeHandler;