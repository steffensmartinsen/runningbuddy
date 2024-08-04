import InputField from './inputField';

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
            <InputField
            placeholder='Hour'
            value={hour}
            onChange={setHour}
            />
            <InputField
            placeholder='Min'
            value={min}
            onChange={setMin}
            />
            <InputField
            placeholder='Sec'
            value={sec}
            onChange={setSec}
            />
        </div>
    );
}

export default TimeInput;