import React from 'react';
import InputField from './inputField';
import { Input, RadioGroup, Radio, Stack } from '@chakra-ui/react';

const DistanceHandler = () => {
    const [metric, setMetric] = React.useState('km');
    

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
            <div className="timingsContainer">
                <InputField placeholder='Hour' />
                <InputField placeholder='Min' />
                <InputField placeholder='Sec' />
            </div>
            <p className="subTitle">Pace:</p>
            <div className="timingsContainer">
                <InputField placeholder='Min' />
                <InputField placeholder='Sec' />
            </div>
        </>
    )
}

export default DistanceHandler;