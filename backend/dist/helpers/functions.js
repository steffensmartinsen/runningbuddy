"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumber = FormatNumber;
exports.ValidatePace = ValidatePace;
exports.ValidateTime = ValidateTime;
exports.ValidateUnit = ValidateUnit;
exports.PaceKmToPaceMile = PaceKmToPaceMile;
exports.PaceMileToPaceKm = PaceMileToPaceKm;
exports.PaceToSeconds = PaceToSeconds;
exports.TimeToMinutes = TimeToMinutes;
exports.TimeToSeconds = TimeToSeconds;
exports.ExtractMinAndSec = ExtractMinAndSec;
exports.AlignUnits = AlignUnits;
const constants = __importStar(require("../constants/"));
// Desc: Helper functions used throughout the application
// FormatNumber formats a number to have a leading zero if it is less than 10
function FormatNumber(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}
// ValidatePace validates the input parameters for running pace
function ValidatePace(min, sec) {
    return min >= 0 && sec >= 0 && sec < 60;
}
// ValidateTime validates the input parameters for running time
function ValidateTime(hour, min, sec) {
    return hour >= 0 && min >= 0 && sec >= 0 && min < 60 && sec < 60;
}
// ValidateUnit validates the input parameter for unit of measurement
function ValidateUnit(unit) {
    return unit === constants.UNIT_KM || unit === constants.UNIT_MILES;
}
// PaceKmtoPaceMile converts a pace from minutes per kilometer to minutes per mile
function PaceKmToPaceMile(pace) {
    // Multiply the pace by the conversion factor
    let paceMile = pace * constants.CONVERSION_MILES_AND_KM;
    return paceMile;
}
// PaceMileToPaceKm converts a pace from minutes per mile to minutes per kilometer
function PaceMileToPaceKm(pace) {
    // Multiply the pace by the conversion factor
    const paceKm = pace / constants.CONVERSION_MILES_AND_KM;
    return paceKm;
}
// PaceToSeconds converts a pace to seconds
function PaceToSeconds(min, sec) {
    return (min * constants.SECONDS_IN_MINUTE) + sec;
}
// TimeToMinutes converts a time to minutes
function TimeToMinutes(hour, min, sec) {
    return ((hour * constants.MINUTES_IN_HOUR) + min + (sec / constants.SECONDS_IN_MINUTE));
}
// TimeToSeconds converts a time to seconds
function TimeToSeconds(hour, min, sec) {
    return ((hour * constants.MINUTES_IN_HOUR * constants.SECONDS_IN_MINUTE) + (min * constants.SECONDS_IN_MINUTE) + sec);
}
// extractMinAndSec extracts the minutes and seconds from a pace and returns them as a tuple
function ExtractMinAndSec(pace) {
    let minute = pace / 60;
    let second = (minute - Math.floor(minute)) * 60;
    minute = Math.floor(minute);
    second = Math.round(second);
    return [minute, second];
}
// AlignUnits aligns the units of distance and pace
function AlignUnits(distanceUnit, paceUnit, distance) {
    if (distanceUnit === constants.UNIT_MILES && paceUnit === constants.UNIT_KM) {
        return distance * constants.CONVERSION_MILES_AND_KM;
    }
    return distance / constants.CONVERSION_MILES_AND_KM;
}
