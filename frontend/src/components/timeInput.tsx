import InputField from './inputField';
import * as constants from '../constants';

interface TimeInputProps {
    hour: string;
    min: string;
    sec: string;
    setHour: (value: string) => void;
    setMin: (value: string) => void;
    setSec: (value: string) => void;
}


function TimeInput({ hour, min, sec, setHour, setMin, setSec }: TimeInputProps) {
    
    return ( 
        <div className="timingsContainer">
            <p className="inContainerTitle">Time:</p>
            <InputField
            className={constants.CLASS_SMALL_INPUT}
            placeholder={constants.TIME.HOUR}
            value={hour}
            onChange={setHour}
            />
            :
            <InputField
            className={constants.CLASS_SMALL_INPUT}
            placeholder={constants.TIME.MIN}
            value={min}
            onChange={setMin}
            />
            :
            <InputField
            className={constants.CLASS_SMALL_INPUT}
            placeholder={constants.TIME.SEC}
            value={sec}
            onChange={setSec}
            />
        </div>
    );
}

export default TimeInput;