import * as constants from '../constants/';
// Desc: Helper functions used throughout the application

// FormatNumber formats a number to have a leading zero if it is less than 10
export function FormatNumber(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}

// ValidatePace validates the input parameters for running pace
export function ValidatePace(min: number, sec: number): boolean {
    return min >= 0 && sec >= 0 && sec < 60;
}

// ValidateTime validates the input parameters for running time
export function ValidateTime(hour: number, min: number, sec: number): boolean {
    return hour >= 0 && min >= 0 && sec >= 0 && min < 60 && sec < 60;
}

// ValidateUnit validates the input parameter for unit of measurement
export function ValidateUnit(unit: string): boolean {
    return unit === constants.UNIT_KM || unit === constants.UNIT_MILES;
}

// PaceKmtoPaceMile converts a pace from minutes per kilometer to minutes per mile
export function PaceKmToPaceMile(pace: number): number {

    // Multiply the pace by the conversion factor
    let paceMile = pace * constants.KM_TO_MILE_CONVERSION;

    return paceMile;

}

// PaceMileToPaceKm converts a pace from minutes per mile to minutes per kilometer
export function PaceMileToPaceKm(pace: number): number {

    // Multiply the pace by the conversion factor
    const paceKm = pace * constants.MILE_TO_KM_CONVERSION;

    return paceKm;
}

// PaceToSeconds converts a pace to seconds
export function PaceToSeconds(min: number, sec: number): number {
    return (min * constants.SECONDS_IN_MINUTE) + sec;
}

export function TimeToMinutes(hour: number, min: number, sec: number): number {
    return ((hour * constants.MINUTES_IN_HOUR) + min + (sec / constants.SECONDS_IN_MINUTE));
}


// extractMinAndSec extracts the minutes and seconds from a pace and returns them as a tuple
export function ExtractMinAndSec(pace: number): [number, number] {
    let minute = pace / 60;
    let second = (minute - Math.floor(minute)) * 60;
    minute = Math.floor(minute);
    second = Math.round(second);

    return [minute, second];
}