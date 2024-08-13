import * as constants from '../constants/';
import { Response } from 'express';
// Desc: Helper functions used throughout the application

// FormatNumber formats a number to have a leading zero if it is less than 10
export function FormatNumber(num: number): string {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}

// Validation functions
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

// ValidateTimeEndpoint validates the input parameters for the /time endpoint
export function ValidateTimeEndpoint(unit: string, min: number, sec: number, distance: number): boolean {
    return ValidatePace(min, sec) && distance > 0 && ValidateUnit(unit);
}

// ValidatePaceEndpoint validates the input parameters for the /pace endpoint
export function ValidatePaceEndpoint(distanceUnit: string, paceUnit: string, hour: number, min: number, sec: number, distance: number): boolean {
    return ValidateTime(hour, min, sec) && distance > 0 && ValidateUnit(distanceUnit) && ValidateUnit(paceUnit);
}

// ValidateDistanceEndpoint validates the input parameters for the /distance endpoint
export function ValidateDistanceEndpoint(paceMin: number, paceSec: number, runHour: number, runMin: number, runSec: number, distanceUnit: string, paceUnit: string): boolean {
    return ValidatePace(paceMin, paceSec) && ValidateTime(runHour, runMin, runSec) && ValidateUnit(distanceUnit) && ValidateUnit(paceUnit);
}


// Running calculations functions
// PaceKmtoPaceMile converts a pace from minutes per kilometer to minutes per mile
export function PaceKmToPaceMile(pace: number): number {

    // Multiply the pace by the conversion factor
    let paceMile = pace * constants.CONVERSION_MILES_AND_KM

    return paceMile;

}

// PaceMileToPaceKm converts a pace from minutes per mile to minutes per kilometer
export function PaceMileToPaceKm(pace: number): number {

    // Multiply the pace by the conversion factor
    const paceKm = pace / constants.CONVERSION_MILES_AND_KM;

    return paceKm;
}

// PaceToSeconds converts a pace to seconds
export function PaceToSeconds(min: number, sec: number): number {
    return (min * constants.SECONDS_IN_MINUTE) + sec;
}

// TimeToMinutes converts a time to minutes
export function TimeToMinutes(hour: number, min: number, sec: number): number {
    return ((hour * constants.MINUTES_IN_HOUR) + min + (sec / constants.SECONDS_IN_MINUTE));
}

// TimeToSeconds converts a time to seconds
export function TimeToSeconds(hour: number, min: number, sec: number): number {
    return ((hour * constants.MINUTES_IN_HOUR * constants.SECONDS_IN_MINUTE) + (min * constants.SECONDS_IN_MINUTE) + sec);
}

// extractMinAndSec extracts the minutes and seconds from a pace and returns them as a tuple
export function ExtractMinAndSec(pace: number): [number, number] {
    let minute = pace / 60;
    let second = (minute - Math.floor(minute)) * 60;
    minute = Math.floor(minute);
    second = Math.round(second);

    return [minute, second];
}

// AlignUnits aligns the units of distance and pace
export function AlignUnits(distanceUnit: string, paceUnit: string, distance: number): number {
    if (distanceUnit === constants.UNIT_MILES && paceUnit === constants.UNIT_KM) {
        return distance * constants.CONVERSION_MILES_AND_KM;
    }
    return distance / constants.CONVERSION_MILES_AND_KM;
}

// SetCORSHeaders sets the CORS headers for the response
export function SetCORSHeaders(res: Response): void {
    res.setHeader('Access-Control-Allow-Origin', constants.DEFAULT_URL);
    res.setHeader('Access-Control-Allow-Methods', `${constants.HTTP_METHOD_POST}, ${constants.HTTP_METHOD_OPTIONS}`);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}