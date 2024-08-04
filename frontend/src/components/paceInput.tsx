import InputField from "./inputField";

interface PaceInputProps {
    paceMin: string;
    paceSec: string;
    setMin: (value: string) => void;
    setSec: (value: string) => void;
}

function PaceInput({ paceMin, paceSec, setMin, setSec }: PaceInputProps) {

    return (
        <div className="timingsContainer">
            <InputField
            placeholder='Min'
            value={paceMin}
            onChange={setMin}
            />
            <InputField
            placeholder='Sec'
            value={paceSec}
            onChange={setSec}
            />
        </div>
    );
}

export default PaceInput;