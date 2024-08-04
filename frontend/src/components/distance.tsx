import React from 'react';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';
import TimeInput from './timeInput';
import PaceInput from './paceInput';
import MetricButtons from './metricButtons';

const DistanceHandler = () => {
    const [paceMetric, setPaceMetric] = React.useState('km');
    const [distanceMetric, setDistanceMetric] = React.useState('km');
    const [timeHour, setTimeHour] = React.useState('');
    const [timeMin, setTimeMin] = React.useState('');
    const [timeSec, setTimeSec] = React.useState('');
    const [paceMin, setPaceMin] = React.useState('');
    const [paceSec, setPaceSec] = React.useState('');

    console.log(paceMetric, distanceMetric, timeHour, timeMin, timeSec, paceMin, paceSec);

    return (
        <>
            <h1 className="tabH1">Calculate Distance</h1>
            <p className="explanation">Provide the time of your run and the 
                pace for the run in total to calculate the distance of the run.</p>
            
            <div className="metricContainer">
                <div className="metric">
                    <p className="subTitle">Pace metric:</p>
                    <MetricButtons metric={paceMetric} setMetric={setPaceMetric} />
                </div>
                <div className="metric">
                    <p className="subTitle">Distance metric:</p>
                    <MetricButtons metric={distanceMetric} setMetric={setDistanceMetric} />
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

        </>
    )
}

export default DistanceHandler;