import InputField from "./inputField";

interface PaceInputProps {
    paceMin: string;
    paceSec: string;
    minChange: (value: string) => void;
    secChange: (value: string) => void;
}

function PaceInput({ paceMin, paceSec, minChange, secChange }: PaceInputProps) {
    const handleMinChange = (e: string) => {
        minChange(e);
    };

    const handleSecChange = (e: string) => {
        secChange(e);
    };

    return (
        <div className="timingsContainer">
            <InputField
            placeholder='Min'
            value={paceMin}
            onChange={handleMinChange}
            />
            <InputField
            placeholder='Sec'
            value={paceSec}
            onChange={handleSecChange}
            />
        </div>
    );
}

export default PaceInput;