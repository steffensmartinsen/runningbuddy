import { Request, Response } from 'express';
import * as constants from '../constants';
import { DistanceTime } from '../structs/calculation-structs';
import * as helpers from '../helpers/functions';
//import { FormatNumber, ValidatePace, ValidateUnit, PaceMileToPaceKm } from '../helpers/functions';

// CalculateTimesHandler is the function that serves the '/pace-calculator/times' path. It only accepts POST requests.
export function CalculateTimeHandler(req: Request, res: Response): void {

    // Set the CORS headers
    helpers.SetCORSHeaders(res);

    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateTimes(req, res);
    } else if (req.method === constants.HTTP_METHOD_OPTIONS) {
        res.status(constants.HTTP_STATUS_NO_CONTENT).send();
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
    const {unit, min, sec, } = req.body;

    // Validate the input parameters
    if (!helpers.ValidateTimeEndpoint(unit, min, sec, constants.ONE)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
        return;
    }

    // Calculate the pace for each distance
    let pace5k = CalculateTime(unit, constants.DISTANCE_FIVE_K, min, sec);
    let pace10k = CalculateTime(unit, constants.DISTANCE_TEN_K, min, sec);
    let paceHalfMarathon = CalculateTime(unit, constants.DISTANCE_HALF_MARATHON, min, sec);
    let paceMarathon = CalculateTime(unit, constants.DISTANCE_MARATHON, min, sec);

    res.json({
        "fiveK": {
            hours: helpers.FormatNumber(pace5k.hours),
            minutes: helpers.FormatNumber(pace5k.minutes),
            seconds: helpers.FormatNumber(pace5k.seconds)
        },
        "tenK": {
            hours: helpers.FormatNumber(pace10k.hours),
            minutes: helpers.FormatNumber(pace10k.minutes),
            seconds: helpers.FormatNumber(pace10k.seconds)
        },
        "halfMarathon": {
            hours: helpers.FormatNumber(paceHalfMarathon.hours),
            minutes: helpers.FormatNumber(paceHalfMarathon.minutes),
            seconds: helpers.FormatNumber(paceHalfMarathon.seconds)
        },
        "marathon": {
            hours: helpers.FormatNumber(paceMarathon.hours),
            minutes: helpers.FormatNumber(paceMarathon.minutes),
            seconds: helpers.FormatNumber(paceMarathon.seconds)
        }
    });
}

// CalculatedSpecifiedDistance is the function that calculates the pace for a specified distance based on the input parameters
function CalculateSpecifiedDistance(req: Request, res: Response): void {
    // Extract the distance, minute and seconds from the POST request body
    const { distanceUnit, distance, paceUnit } = req.body;
    let { min, sec } = req.body;
            
    // Validate the input parameters
    if (!helpers.ValidateTimeEndpoint(distanceUnit, min, sec, distance)) {        
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
        return;
    }

    // Handle case where distance is miles and pace is in km
    if (distanceUnit === constants.UNIT_MILES && paceUnit === constants.UNIT_KM) {
        const pace = helpers.PaceToSeconds(min, sec);
        const paceMiles = helpers.PaceKmToPaceMile(pace);
        [min, sec] = helpers.ExtractMinAndSec(paceMiles);
    }

    // Handle case where distance is km and pace is in miles
    if (distanceUnit === constants.UNIT_KM && paceUnit === constants.UNIT_MILES) {
        const pace = helpers.PaceToSeconds(min, sec);
        const paceKm = helpers.PaceMileToPaceKm(pace);
        [min, sec] = helpers.ExtractMinAndSec(paceKm);
    }

    // Calculate the pace for the specified distance
    let pace = CalculateTime(distanceUnit, distance, min, sec);

    res.json({
        hours: helpers.FormatNumber(pace.hours),
        minutes: helpers.FormatNumber(pace.minutes),
        seconds: helpers.FormatNumber(pace.seconds)
    });
}


// CalculateTime calculates the time it takes to run a distance based on the input parameters
// unit: the unit of the pace that is calculated (km or miles)
// distance: the distance to calculate the time for
// min: the minutes to calculate the time for
// seconds: the seconds to calculate the time for
function CalculateTime(unit: string, distance: number, min: number, sec: number): DistanceTime {

    // Combine the time to work with seconds
    let pace = (min * constants.SECONDS_IN_MINUTE) + sec;
    
    // Handle the common distances in KM
    if (unit === constants.UNIT_MILES && constants.DISTANCES_ARRAY.includes(distance)) {
        pace = helpers.PaceMileToPaceKm(pace);
    }
    
    // Calculate the time it takes to run the distance
    let distance_time = pace * distance;

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
