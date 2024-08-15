import React from 'react';
import { Button } from '@chakra-ui/react';
import MetricButtons from './metricButtons';
import DistanceInput from './distanceInput';
import * as constants from '../constants';
import TimeInput from './timeInput';
import { ValidateDistance, ValidateTime } from '../utils/validation';

const PaceHandler = () => {
    const [distanceUnit, setDistanceUnit] = React.useState('km');
    const [distance, setDistance] = React.useState('');
    const [timeHour, setTimeHour] = React.useState('');
    const [timeMin, setTimeMin] = React.useState('');
    const [timeSec, setTimeSec] = React.useState('');
    const [answerUnit, setAnswerUnit] = React.useState('km');
    const [answerMin, setAnswerMin] = React.useState('');
    const [answerSec, setAnswerSec] = React.useState('');
    const [response, setResponse] = React.useState(false);
    const [errorMessages, setErrorMessages] = React.useState('');

    const handleClick = () => {

        // Validate the distance input
        if (!ValidateDistance(distance)) {
            setErrorMessages('Invalid input');
            setResponse(false);
            return;
        }

        // Validate the time input
        if (!ValidateTime(timeHour, timeMin, timeSec)) {
            setErrorMessages('Invalid input');
            setResponse(false);
            return;
        }

        // Create the data object to send to the backend
        const data = {
            distanceUnit: distanceUnit,
            distance: Number(distance),
            time: {
                hour: Number(timeHour),
                min: Number(timeMin),
                sec: Number(timeSec)
            },
            paceUnit: answerUnit,
        }

        // Send the data object to the backend
        fetch(constants.ENDPOINTS.PACE, {
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
            setAnswerMin(data.minutes);
            setAnswerSec(data.seconds);
            setErrorMessages('');
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <h1 className="tabH1">PaceHandler</h1>
            <p className="explanation">Provide the distance of your run
                and the time it took to complete it to calculate the pace of the run.
            </p>

            <div className="metricContainer">
                <div className="metric">
                    <p className="subTitle">Answer unit:</p>
                    <MetricButtons metric={answerUnit} setMetric={setAnswerUnit} />
                </div>
            </div>

            <DistanceInput
            unit={distanceUnit} 
            distance={distance} 
            setDistance={setDistance} 
            setUnit={setDistanceUnit} 
            />

            <TimeInput
            hour={timeHour}
            min={timeMin}
            sec={timeSec}
            setHour={setTimeHour}
            setMin={setTimeMin}
            setSec={setTimeSec}
            />

            <Button colorScheme='red' className="calculateButton" size='md' onClick={handleClick}>
                Calculate
            </Button>

            {errorMessages && (
                <div className="errorContainer">
                    <p className="errorText">{errorMessages}</p>
                </div>
            )}

            {response && (
                <div className="resultContainer">
                    <p className="resultText">Pace:</p>
                    <p className="result">{answerMin}:{answerSec}</p>
                    <p className="distanceUnit">{answerUnit}/hr</p>
                </div>
            )}
        </>
    )
}

export default PaceHandler;