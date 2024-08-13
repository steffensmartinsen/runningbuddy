import React from 'react';
import { Button } from '@chakra-ui/react';
import MetricButtons from './metricButtons';
import DistanceInput from './distanceInput';
import PaceInput from './paceInput';
import * as constants from '../constants';
import { error } from 'console';
import TimeInput from './timeInput';

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

    const handleClick = () => {

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

            {response && (
                <div className="resultContainer">
                    <p className="resultText">Pace:</p>
                    <p className="result">{answerMin}:{answerSec}</p>
                </div>
            )}
        </>
    )
}

export default PaceHandler;