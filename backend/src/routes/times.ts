import { Request, Response } from 'express';
import * as constants from '../constants';
import { DistanceTime } from '../structs/calculation-structs';
import { FormatNumber, ValidateTime } from '../helpers/functions';

// CalculateTimesHandler is the function that serves the '/pace-calculator/distances' path. It only accepts POST requests.
export function CalculateTimeHandler(req: Request, res: Response): void {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateTimes(req, res);
    } else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(
            constants.TEXT_METHOD_NOT_ALLOWED
        );
    }
}

// CalculateSpecifiedDistanceTimeHandler is the function that serves the '/pace-calculator/specified-distance/' path. It only accepts POST requests.
export function CalculateSpecifiedDistanceTimeHandler(req: Request, res: Response): void {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateSpecifiedDistance(req, res);
    } else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(
            constants.TEXT_METHOD_NOT_ALLOWED
        );
    }
}

// CalculateTimes is the function that calculates the pace for each distance based on the input parameters
function CalculateTimes (req: Request, res: Response): void {

    // Extract the minute and seconds from the POST request body
    const { min, sec } = req.body;

    // Validate the input parameters
    if (!ValidateTime(min, sec)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
        return;
    }

    // Calculate the pace for each distance
    let pace5k = CalculateTime(constants.DISTANCE_FIVE_K, min, sec);
    let pace10k = CalculateTime(constants.DISTANCE_TEN_K, min, sec);
    let paceHalfMarathon = CalculateTime(constants.DISTANCE_HALF_MARATHON, min, sec);
    let paceMarathon = CalculateTime(constants.DISTANCE_MARATHON, min, sec);

    res.json({
        "5K": {
            hours: FormatNumber(pace5k.hours),
            minutes: FormatNumber(pace5k.minutes),
            seconds: FormatNumber(pace5k.seconds)
        },
        "10K": {
            hours: FormatNumber(pace10k.hours),
            minutes: FormatNumber(pace10k.minutes),
            seconds: FormatNumber(pace10k.seconds)
        },
        "Half Marathon": {
            hours: FormatNumber(paceHalfMarathon.hours),
            minutes: FormatNumber(paceHalfMarathon.minutes),
            seconds: FormatNumber(paceHalfMarathon.seconds)
        },
        "Marathon": {
            hours: FormatNumber(paceMarathon.hours),
            minutes: FormatNumber(paceMarathon.minutes),
            seconds: FormatNumber(paceMarathon.seconds)
        }
    });
}

// CalculatedSpecifiedDistance is the function that calculates the pace for a specified distance based on the input parameters
function CalculateSpecifiedDistance(req: Request, res: Response): void {
    // Extract the distance, minute and seconds from the POST request body
    const { distance, min, sec } = req.body;

    // Validate the input parameters
    if (!ValidateTime(min, sec) || distance <= 0) {        
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
        return;
    }

    // Calculate the pace for the specified distance
    let pace = CalculateTime(distance, min, sec);

    res.json({
        hours: FormatNumber(pace.hours),
        minutes: FormatNumber(pace.minutes),
        seconds: FormatNumber(pace.seconds)
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
