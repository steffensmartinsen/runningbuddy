import InputField from './inputField';

interface TimeInputProps {
    hour: string;
    min: string;
    sec: string;
    setHour: (value: string) => void;
    minChange: (value: string) => void;
    secChange: (value: string) => void;
}

function TimeInput({ hour, min, sec, setHour, minChange, secChange }: TimeInputProps) {
    // const handleHourChange = (e: string) => {
    //     hourChange(e);
    // };

    const handleMinChange = (e: string) => {
        minChange(e);
    };

    const handleSecChange = (e: string) => {
        secChange(e);
    };

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
            onChange={handleMinChange}
            />
            <InputField
            placeholder='Sec'
            value={sec}
            onChange={handleSecChange}
            />
        </div>
    );
}

export default TimeInput;