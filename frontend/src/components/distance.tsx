import React from 'react';
import { RadioGroup, Radio, Stack } from '@chakra-ui/react';
import TimeInput from './timeInput';
import PaceInput from './paceInput';

const DistanceHandler = () => {
    const [metric, setMetric] = React.useState('km');
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

    return (
        <>
            <h1 className="tabH1">Calculate Distance</h1>
            <p className="explanation">Provide the time of your run and the 
                pace for the run in total to calculate the distance of the run.</p>
            <p className="subTitle">Metric:</p>
            <div className="radioContainer">
                <RadioGroup onChange={setMetric} value={metric}>
                    <Stack direction='column'>
                        <Radio value='km' className="inputField">Km</Radio>
                        <Radio value='miles' className="inputField">Miles</Radio>
                    </Stack>
                </RadioGroup>
            </div>
            <p className="subTitle">Time:</p>
            <TimeInput
            hour={timeHour}
            min={timeMin}
            sec={timeSec}
            hourChange={handleTimeHourChange}
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