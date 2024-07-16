import { Request, Response } from 'express';
import * as constants from '../constants';
import { DistanceTime } from '../structs/distance-structs';

// PaceCalculatorPOST is the function that serves the '/pace-calculator/distances' path
export function DistanceTimesPOST (req: Request, res: Response): void {

    // TODO Add validation for the input parameters (seconds not more than 60, etc.)

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
function CalculateTime(distance: number, min: number, seconds: number): DistanceTime {
    
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
    }
}