import React from 'react';
import InputField from './inputField';
import { Input, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import TimeInput from './timeInput';

const DistanceHandler = () => {
    const [metric, setMetric] = React.useState('km');
    const [hour, setTimeHour] = React.useState('');
    const [min, setTimeMin] = React.useState('');
    const [sec, setTimeSec] = React.useState('');

    const handleTimeHourChange = (e: string) => {
        setTimeHour(e);
    }
    const handleTimeMinChange = (e: string) => {
        setTimeMin(e);
    }
    const handleTimeSecChange = (e: string) => {
        setTimeSec(e);
    }

    console.log(metric, hour, min, sec);

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
            hour={hour}
            min={min}
            sec={sec}
            hourChange={handleTimeHourChange}
            minChange={handleTimeMinChange}
            secChange={handleTimeSecChange}
            />
            {/* <p className="subTitle">Pace:</p>
            <div className="timingsContainer">
                <InputField placeholder='Min' />
                <InputField placeholder='Sec' />
            </div> */}
        </>
    )
}

export default DistanceHandler;