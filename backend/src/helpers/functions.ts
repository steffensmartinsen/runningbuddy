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

// PaceKmtoPaceMile converts a pace from minutes per kilometer to minutes per mile
export function PaceKmToPaceMile(min: number, sec: number): [number, number] {
    
    // Convert the pace to seconds
    const paceKm = (min * constants.SECONDS_IN_MINUTE + sec);

    // Multiply the pace by the conversion factor
    let paceMile = paceKm * constants.KM_TO_MILE_CONVERSION;

    let [minute, second] = extractMinAndSec(paceMile);
    return [minute, second];

}

// PaceMileToPaceKm converts a pace from minutes per mile to minutes per kilometer
export function PaceMileToPaceKm(min: number, sec: number): [number, number] {
    
    // Convert the pace to seconds
    const paceMile = (min*constants.SECONDS_IN_MINUTE) + sec;

    // Divide the pace by the conversion factor
    const paceKm = paceMile / constants.KM_TO_MILE_CONVERSION;

    const [minute, second] = extractMinAndSec(paceKm);
    return [minute, second];
}

// extractMinAndSec extracts the minutes and seconds from a pace and returns them as a tuple
function extractMinAndSec(pace: number): [number, number] {
    let minute = pace / 60;
    let second = (minute - Math.floor(minute)) * 60;
    minute = Math.floor(minute);
    second = Math.round(second);

    return [minute, second];
}