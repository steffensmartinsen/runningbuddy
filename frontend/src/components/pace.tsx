import React from 'react';
import { Button } from '@chakra-ui/react';
import MetricButtons from './metricButtons';
import DistanceInput from './distanceInput';
import PaceInput from './paceInput';
import * as constants from '../constants';
import { error } from 'console';

const PaceHandler = () => {
    const [distanceUnit, setDistanceUnit] = React.useState('km');
    const [distance, setDistance] = React.useState('');
    const [paceMin, setPaceMin] = React.useState('');
    const [paceSec, setPaceSec] = React.useState('');
    const [answerUnit, setAnswerUnit] = React.useState('km');
    const [answerMin, setAnswerMin] = React.useState('');
    const [answerSec, setAnswerSec] = React.useState('');
    const [response, setResponse] = React.useState(false);

    const handleClick = () => {

        const data = {
            distanceUnit: distanceUnit,
            answerUnit: answerUnit,
            distance: Number(distance),
            pace: {
                min: Number(paceMin),
                sec: Number(paceSec)
            }
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
                    <MetricButtons metric={distanceUnit} setMetric={setDistanceUnit} />
                </div>
            </div>

            <DistanceInput 
            distance={distance} 
            setDistance={setDistance} 
            unit={distanceUnit} 
            />

            <PaceInput
            paceMin={paceMin}
            paceSec={paceSec}
            metric={answerUnit}
            setMin={setPaceMin}
            setSec={setPaceSec}
            setMetric={setAnswerUnit}
            />

            <Button colorScheme='red' className="calculateButton" size='md' onClick={handleClick}>
                Calculate
            </Button>

            {response && (
                <div className="resultContainer">
                    <p className="resultText">Pace</p>
                    <p className="result">{answerMin}:{answerSec}</p>
                </div>
            )}
        </>
    )
}

export default PaceHandler;