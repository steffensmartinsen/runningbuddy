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
export function PaceKmToPaceMile(pace: number): number {

    // Multiply the pace by the conversion factor
    let paceMile = pace * constants.KM_TO_MILE_CONVERSION;

    return paceMile;

}

// PaceMileToPaceKm converts a pace from minutes per mile to minutes per kilometer
export function PaceMileToPaceKm(pace: number): number {

    console.log(pace);

    // Divide the pace by the conversion factor
    const paceKm = pace * constants.MILE_TO_KM_CONVERSION;
    console.log("paceKm", paceKm);

    return paceKm;
}

// extractMinAndSec extracts the minutes and seconds from a pace and returns them as a tuple
function extractMinAndSec(pace: number): [number, number] {
    let minute = pace / 60;
    let second = (minute - Math.floor(minute)) * 60;
    minute = Math.floor(minute);
    second = Math.round(second);

    // TODO Revisit

    return [minute, second];
}