import React from 'react';
import InputField from './inputField';
import { Select } from '@chakra-ui/react';
import * as constants from '../constants';

interface DistanceInputProps {
    distance: string;
    unit: string;
    setDistance: (value: string) => void;
    setUnit: (value: string) => void;
}

function DistanceInput({ distance, setDistance, unit, setUnit }: DistanceInputProps) {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUnit(event.target.value);
    }

    return (
        <div className="timingsContainer">
            <p className="inContainerTitle">Distance:</p>
            <InputField
            className={constants.CLASS_LARGE_INPUT}
            placeholder='distance'
            value={distance}
            onChange={setDistance}
            />

            <Select className="inputField" size="xs" value={unit} onChange={handleSelectChange}>
                <option value='km'>km</option>
                <option value='miles'>miles</option>
            </Select>
        </div>
    );
}


export default DistanceInput;