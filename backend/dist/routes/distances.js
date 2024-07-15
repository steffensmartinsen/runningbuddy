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
exports.PaceCalculatorPOST = PaceCalculatorPOST;
const constants = __importStar(require("../constants"));
// PaceCalculatorPOST is the function that serves the '/pace-calculator' path
function PaceCalculatorPOST(req, res) {
    let min = req.body.minutes;
    let sec = req.body.seconds;
    let pace5k = CalculateTime(constants.DISTANCE_FIVE_K, min, sec);
    let pace10k = CalculateTime(constants.DISTANCE_TEN_K, min, sec);
    let paceHalfMarathon = CalculateTime(constants.DISTANCE_HALF_MARATHON, min, sec);
    let paceMarathon = CalculateTime(constants.DISTANCE_MARATHON, min, sec);
    res.json({
        "5K": {
            minutes: pace5k.minutes,
            seconds: pace5k.seconds
        },
        "10K": {
            hours: pace10k.hours,
            minutes: pace10k.minutes,
            seconds: pace10k.seconds
        },
        "Half Marathon": {
            hours: paceHalfMarathon.hours,
            minutes: paceHalfMarathon.minutes,
            seconds: paceHalfMarathon.seconds
        },
        "Marathon": {
            hours: paceMarathon.hours,
            minutes: paceMarathon.minutes,
            seconds: paceMarathon.seconds
        }
    });
}
// CalculateTime calculates the time it takes to run a distance based on the input parameters
// distance: the distance to calculate the time for
// min: the minutes to calculate the time for
// seconds: the seconds to calculate the time for
function CalculateTime(distance, min, seconds) {
    min = min * constants.SECONDS_IN_MINUTE;
    let time = min + seconds;
    // Combine the time to work with seconds
    let distance_time = time * distance;
    let distance_hr = Math.floor(((distance_time / constants.SECONDS_IN_MINUTE)) / constants.MINUTES_IN_HOUR);
    // Handle the case where the distance is greater than an hour
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
