import { Request, Response } from 'express';
import * as constants from '../constants';
import { FormatNumber, ValidateUnit } from '../helpers/functions';

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
    if (distance < 0 || time < 0 || !ValidateUnit(unit)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
    }

    // Calculate the pace in minutes per kilometer
    const pace = time / distance;

    // Seperate the fraction from the integer
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);

    res.json({
        "minutes": FormatNumber(minutes),
        "seconds": FormatNumber(seconds)
    })
}