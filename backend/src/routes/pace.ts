import { Request, Response } from 'express';
import * as constants from '../constants';
import * as helpers from '../helpers/functions';

// PaceHandler is the handler function for the /pace endpoint. It only accepts POST requests.
export function PaceHandler(req: Request, res: Response): void {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculatePace(req, res);
    } else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(
            constants.TEXT_METHOD_NOT_ALLOWED
        );
    }
}

// CalculatePace is the function to calculate the pace given a distance and a time
function CalculatePace(req: Request, res: Response): void {
    const { unit, distance, time } = req.body;

    // Validation of the input parameters
    if (distance < 0 || !helpers.ValidateTime(time.hour, time.min, time.sec) || !helpers.ValidateUnit(unit)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
    }

    // Convert the time to minutes for the pace calculation
    const timeInMinutes = helpers.TimeToMinutes(time.hour, time.min, time.sec);

    // Calculate the pace in minutes per kilometer
    const pace = timeInMinutes / distance;

    // Seperate the fraction from the integer
    const min = Math.floor(pace);
    const sec = Math.round((pace - min) * 60);

    res.json({
        "minutes": helpers.FormatNumber(min),
        "seconds": helpers.FormatNumber(sec)
    })
}