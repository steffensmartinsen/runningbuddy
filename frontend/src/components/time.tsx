import React from 'react';
import PaceInput from './paceInput';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import DistanceInput from './distanceInput';
import * as constants from '../constants';
import './components.css';

const TimeHandler = () => {

    const [paceUnit, setPaceUnit] = React.useState('km');
    const [paceMin, setPaceMin] = React.useState('');
    const [paceSec, setPaceSec] = React.useState('');
    const [fiveK, setFiveK] = React.useState(null);
    const [tenK, setTenK] = React.useState(null);
    const [halfMarathon, setHalfMarathon] = React.useState(null);
    const [marathon, setMarathon] = React.useState(null);
    const [specifyDistance, setSpecifyDistance] = React.useState(false);
    const [distanceUnit, setDistanceUnit] = React.useState('km');
    const [distance, setDistance] = React.useState('');
    const [response, setResponse] = React.useState(false);

    const handleClick = () => {

        if (!specifyDistance) {
            
            // Create the data object to send to the backend
            const data = {
                paceUnit: paceUnit,
                pace: {
                    min: Number(paceMin),
                    sec: Number(paceSec)
                }
            }

            // Send the data object to the backend
            fetch(constants.ENDPOINTS.TIME, {
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
            .then (data => {
                console.log(data);
                setResponse(true);
                setFiveK(data.fiveK);
            }
            )
        }
    }

    return (
        <>
            <h1 className="tabH1">Calculate Times</h1>
            <p className="explanation">Provide the running pace to calculate the times on the 5K, 10K, half-marathon
                and marathon distances. 
                <br></br>
                Check the <i>Specified Distance</i> box to specify a distance.
            </p>

            <PaceInput
            paceMin={paceMin}
            paceSec={paceSec}
            metric={paceUnit}
            setMin={setPaceMin}
            setSec={setPaceSec}
            setMetric={setPaceUnit}
            />

            <FormControl className="switchContainer">
                <FormLabel className="switchLabel">Specified Distance</FormLabel>
                <Switch colorScheme="red" onChange={() => setSpecifyDistance(!specifyDistance)} />
            </FormControl>

            {specifyDistance && (
                <DistanceInput
                unit={distanceUnit} 
                distance={distance} 
                setDistance={setDistance} 
                setUnit={setDistanceUnit} 
                />
            )}
        </>
    )
}

export default TimeHandler;