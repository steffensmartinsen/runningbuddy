import React from "react";
import InputField from "./inputField";
import { Select } from "@chakra-ui/react";

interface PaceInputProps {
    paceMin: string;
    paceSec: string;
    metric: string;
    setMin: (value: string) => void;
    setSec: (value: string) => void;
    setMetric: (value: string) => void;
}

function PaceInput({ paceMin, paceSec, metric, setMin, setSec, setMetric }: PaceInputProps) {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMetric(event.target.value);
    }

    return (
        <div className="timingsContainer">
            <p className="inContainerTitle">Pace:</p>
            <InputField
            placeholder='min'
            value={paceMin}
            onChange={setMin}
            />
            :
            <InputField
            placeholder='sec'
            value={paceSec}
            onChange={setSec}
            />

            <Select className="inputField" size="xs" value={metric} onChange={handleSelectChange}>
                <option value='km'>km</option>
                <option value='miles'>miles</option>
            </Select>
        </div>
    );
}

export default PaceInput;