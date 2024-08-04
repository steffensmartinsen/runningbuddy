import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

interface MetricButtonsProps {
    metric: string;
    setMetric: (e: string) => void;
}

function MetricButtons({ metric, setMetric }: MetricButtonsProps) {
    return (
        <div className="radioContainer">
        <RadioGroup onChange={setMetric} value={metric}>
            <Stack direction='column'>
                <Radio value='km' className="inputField">Km</Radio>
                <Radio value='miles' className="inputField">Miles</Radio>
            </Stack>
        </RadioGroup>
    </div>
    );
}

export default MetricButtons;
