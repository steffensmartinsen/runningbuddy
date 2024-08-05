import React from 'react';
import { Button } from '@chakra-ui/react';
import TimeInput from './timeInput';
import PaceInput from './paceInput';
import MetricButtons from './metricButtons';

const DistanceHandler = () => {
    const [paceUnit, setPaceUnit] = React.useState('km');
    const [distanceUnit, setDistanceUnit] = React.useState('km');
    const [timeHour, setTimeHour] = React.useState('');
    const [timeMin, setTimeMin] = React.useState('');
    const [timeSec, setTimeSec] = React.useState('');
    const [paceMin, setPaceMin] = React.useState('');
    const [paceSec, setPaceSec] = React.useState('');
    const [distance, setDistance] = React.useState('');
    const [response, setResponse] = React.useState(false);

    const handleClick = () => {

        // Create the data object to send to the backend
        const data = {
            distanceUnit: distanceUnit,
            paceUnit: paceUnit,
            time: {
                hour: Number(timeHour),
                min: Number(timeMin),
                sec: Number(timeSec)
            },
            pace: {
                min: Number(paceMin),
                sec: Number(paceSec)
            }
        }

        // Send the data object to the backend
        fetch('http://localhost:8080/pace-calculator/distance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
            setDistance(data.distance);
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <h1 className="tabH1">Calculate Distance</h1>
            <p className="explanation">Provide the time of your run and the 
                pace for the run in total to calculate the distance of the run.</p>
            
            <div className="metricContainer">
                <div className="metric">
                    <p className="subTitle">Pace metric:</p>
                    <MetricButtons metric={paceUnit} setMetric={setPaceUnit} />
                </div>
                <div className="metric">
                    <p className="subTitle">Distance metric:</p>
                    <MetricButtons metric={distanceUnit} setMetric={setDistanceUnit} />
                </div>
            </div>

            <p className="subTitle">Time:</p>
            <TimeInput
            hour={timeHour}
            min={timeMin}
            sec={timeSec}
            setHour={setTimeHour}
            setMin={setTimeMin}
            setSec={setTimeSec}
            />
            
            <p className="subTitle">Pace:</p>
            <PaceInput
            paceMin={paceMin}
            paceSec={paceSec}
            setMin={setPaceMin}
            setSec={setPaceSec}
            />

            <Button colorScheme='red' className="calculateButton" size='md' onClick={handleClick}>
                Calculate
            </Button>

            {response && (
                <div className="resultContainer">
                    <p className="distanceText">Distance:</p> 
                    <p className="result"> {distance} {distanceUnit}</p>
                </div>
            )}
        </>
    )
}

export default DistanceHandler;