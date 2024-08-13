import React from 'react';
import InputField from './inputField';
import * as constants from '../constants';

interface DistanceInputProps {
    distance: string;
    unit: string;
    setDistance: (value: string) => void;
}

function DistanceInput({ distance, setDistance, unit }: DistanceInputProps) {
    return (
        <div className="timingsContainer">
            <p className="inContainerTitle">Distance:</p>
            <InputField
            className={constants.CLASS_LARGE_INPUT}
            placeholder='distance'
            value={distance}
            onChange={setDistance}
            />
            <p className="inContainerText">{unit}</p>
        </div>
    );
}


export default DistanceInput;