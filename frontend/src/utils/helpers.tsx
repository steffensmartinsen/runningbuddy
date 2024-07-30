interface DistanceProps {
    distanceSelected: boolean;
}

interface PaceProps {
    paceSelected: boolean;
}

interface TimeProps {
    timeSelected: boolean;
}

const distanceClassname = (props: DistanceProps): string => {
    if (props.distanceSelected) {
        return "leftContainer selected";
    } else {
        return "leftContainer";
    }
}

const paceClassname = (props: PaceProps): string => {
    if (props.paceSelected) {
        return "centerContainer selected";
    } else {
        return "centerContainer";
    }
}

const timeClassname = (props: TimeProps): string => {
    if (props.timeSelected) {
        return "rightContainer selected";
    } else {
        return "rightContainer";
    }
}

export { distanceClassname, paceClassname, timeClassname };