import { Request, Response } from 'express';
import * as constants from '../constants';
import { ValidatePace, ValidateTime, ValidateUnit, TimeToSeconds, PaceToSeconds, PaceMileToPaceKm, PaceKmToPaceMile } from '../helpers/functions';

// DistanceHandler is the function that servers the /pace-calculator/distance endpoint. It only accepts POST requests.
export function DistanceHandler(req: Request, res: Response): void {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateDistance(req, res);
    } else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(
            constants.TEXT_METHOD_NOT_ALLOWED
        );
    }
}

// CalculateDistance is the function that calculates the distance based on the running time and pace.
function CalculateDistance(req: Request, res: Response): void {

    // Extract the distance unit and the pace unit
    const { distanceUnit, paceUnit } = req.body;

    // Extract the running time input paramteres
    const runningHour = req.body.time.hour;
    const runningMin = req.body.time.min;
    const runningSec = req.body.time.sec;

    // Extract the pace input parameters
    const paceMin = req.body.pace.min;
    const paceSec = req.body.pace.sec;

    // Validate the input parameters
    if (!ValidatePace(paceMin, paceSec) || !ValidateTime(runningHour, runningMin, runningSec) || !ValidateUnit(distanceUnit) || !ValidateUnit(paceUnit)){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(
            constants.INVALID_INPUT
        );
        return;
    }

    // Calculate running time to seconds
    const runInSeconds = TimeToSeconds(runningHour, runningMin, runningSec);
    
    // Calculate pace to seconds
    let paceInSeconds = PaceToSeconds(paceMin, paceSec);
    console.log(paceInSeconds);

    if (distanceUnit === constants.UNIT_MILES && paceUnit === constants.UNIT_KM) {
        paceInSeconds = PaceKmToPaceMile(paceInSeconds);
        console.log("inside first if");
        console.log(paceInSeconds);
    }
    if (distanceUnit === constants.UNIT_KM && paceUnit === constants.UNIT_MILES) {
        paceInSeconds = PaceMileToPaceKm(paceInSeconds);
        console.log("inside second if");
        console.log(paceInSeconds);
    }

    // Calculate the distance and multiply it by 60 minutes
    const distance = (runInSeconds/paceInSeconds);

    res.json({
        "distance": distance.toFixed(2)
    });

}