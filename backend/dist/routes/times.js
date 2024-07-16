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
exports.CalculateTimeHandler = CalculateTimeHandler;
exports.CalculateSpecifiedDistanceTimeHandler = CalculateSpecifiedDistanceTimeHandler;
const constants = __importStar(require("../constants"));
const functions_1 = require("../helpers/functions");
// CalculateTimesHandler is the function that serves the '/pace-calculator/distances' path. It only accepts POST requests.
function CalculateTimeHandler(req, res) {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateTimes(req, res);
    }
    else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(constants.TEXT_METHOD_NOT_ALLOWED);
    }
}
// CalculateSpecifiedDistanceTimeHandler is the function that serves the '/pace-calculator/specified-distance/' path. It only accepts POST requests.
function CalculateSpecifiedDistanceTimeHandler(req, res) {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateSpecifiedDistance(req, res);
    }
    else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(constants.TEXT_METHOD_NOT_ALLOWED);
    }
}
// CalculateTimes is the function that calculates the pace for each distance based on the input parameters
function CalculateTimes(req, res) {
    // Extract the minute and seconds from the POST request body
    const { min, sec } = req.body;
    // Validate the input parameters
    if (!(0, functions_1.ValidateTime)(min, sec)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(constants.INVALID_INPUT);
        return;
    }
    // Calculate the pace for each distance
    let pace5k = CalculateTime(constants.DISTANCE_FIVE_K, min, sec);
    let pace10k = CalculateTime(constants.DISTANCE_TEN_K, min, sec);
    let paceHalfMarathon = CalculateTime(constants.DISTANCE_HALF_MARATHON, min, sec);
    let paceMarathon = CalculateTime(constants.DISTANCE_MARATHON, min, sec);
    res.json({
        "5K": {
            hours: (0, functions_1.FormatNumber)(pace5k.hours),
            minutes: (0, functions_1.FormatNumber)(pace5k.minutes),
            seconds: (0, functions_1.FormatNumber)(pace5k.seconds)
        },
        "10K": {
            hours: (0, functions_1.FormatNumber)(pace10k.hours),
            minutes: (0, functions_1.FormatNumber)(pace10k.minutes),
            seconds: (0, functions_1.FormatNumber)(pace10k.seconds)
        },
        "Half Marathon": {
            hours: (0, functions_1.FormatNumber)(paceHalfMarathon.hours),
            minutes: (0, functions_1.FormatNumber)(paceHalfMarathon.minutes),
            seconds: (0, functions_1.FormatNumber)(paceHalfMarathon.seconds)
        },
        "Marathon": {
            hours: (0, functions_1.FormatNumber)(paceMarathon.hours),
            minutes: (0, functions_1.FormatNumber)(paceMarathon.minutes),
            seconds: (0, functions_1.FormatNumber)(paceMarathon.seconds)
        }
    });
}
// CalculatedSpecifiedDistance is the function that calculates the pace for a specified distance based on the input parameters
function CalculateSpecifiedDistance(req, res) {
    // Extract the distance, minute and seconds from the POST request body
    const { distance, min, sec } = req.body;
    // Validate the input parameters
    if (!(0, functions_1.ValidateTime)(min, sec) || distance <= 0) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(constants.INVALID_INPUT);
        return;
    }
    // Calculate the pace for the specified distance
    let pace = CalculateTime(distance, min, sec);
    res.json({
        hours: (0, functions_1.FormatNumber)(pace.hours),
        minutes: (0, functions_1.FormatNumber)(pace.minutes),
        seconds: (0, functions_1.FormatNumber)(pace.seconds)
    });
}
// CalculateTime calculates the time it takes to run a distance based on the input parameters
// distance: the distance to calculate the time for
// min: the minutes to calculate the time for
// seconds: the seconds to calculate the time for
function CalculateTime(distance, min, seconds) {
    // Combine the time to work with seconds
    min = min * constants.SECONDS_IN_MINUTE;
    let time = min + seconds;
    let distance_time = time * distance;
    // Handle the case where the distance is greater than an hour
    let distance_hr = Math.floor(((distance_time / constants.SECONDS_IN_MINUTE)) / constants.MINUTES_IN_HOUR);
    if (distance_hr > 0) {
        distance_time = distance_time - (distance_hr * constants.MINUTES_IN_HOUR * constants.SECONDS_IN_MINUTE);
    }
    // Calculate the minutes and seconds
    let distance_min = Math.floor(distance_time / constants.SECONDS_IN_MINUTE);
    let distance_sec = Math.round(distance_time % constants.SECONDS_IN_MINUTE);
    return {
        hours: distance_hr,
        minutes: distance_min,
        seconds: distance_sec
    };
}
