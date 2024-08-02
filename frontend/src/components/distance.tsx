import React from 'react';
import InputField from './inputField';
import { Input } from '@chakra-ui/react';

const DistanceHandler = () => {
    return (
        <>
            <h1>DistanceHandler</h1>
            <p>DistanceHandler is the function that servers the /pace-calculator/distance endpoint. It only accepts POST requests.</p>
            <div className="timeContainer">
                <InputField placeholder='Hour' />
                <InputField placeholder='Min' />
                <InputField placeholder='Sec' />
            </div>
        </>
    )
}

export default DistanceHandler;