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


    const handleTimeHourChange = (e: string) => {
        setTimeHour(e);
    }
    const handleTimeMinChange = (e: string) => {
        setTimeMin(e);
    }
    const handleTimeSecChange = (e: string) => {
        setTimeSec(e);
    }

    const handlePaceMinChange = (e: string) => {
        setPaceMin(e);
    }
    const handlePaceSecChange = (e: string) => {
        setPaceSec(e);
    }

    console.log(timeHour);

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
            minChange={handleTimeMinChange}
            secChange={handleTimeSecChange}
            />
            
            <p className="subTitle">Pace:</p>
            <PaceInput
            paceMin={paceMin}
            paceSec={paceSec}
            minChange={handlePaceMinChange}
            secChange={handlePaceSecChange}
            />

        </>
    )
}

export default DistanceHandler;