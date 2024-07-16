import { Request, Response } from 'express';
import * as constants from '../constants';
import { FormatNumber } from '../helpers/functions';

export function DistanceHandler(req: Request, res: Response): void {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateDistance(req, res);
    } else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(
            constants.TEXT_METHOD_NOT_ALLOWED
        );
    }
}

function CalculateDistance(req: Request, res: Response): void {

    // Extract the running time input paramteres
    const runningHour = req.body.time.hour;
    const runningMin = req.body.time.min;
    const runningSec = req.body.time.sec;

    // Extract the pace input parameters
    const paceMin = req.body.pace.min;
    const paceSec = req.body.pace.sec;

    // Calculate running time to seconds
    const runInSeconds = ((runningHour * constants.MINUTES_IN_HOUR) * constants.SECONDS_IN_MINUTE) 
    + (runningMin * constants.SECONDS_IN_MINUTE) 
    + runningSec;
    
    // Calculate pace to seconds
    const paceInSeconds = (paceMin * constants.MINUTES_IN_HOUR) + paceSec

    // Calculate the distance and multiply it by 60 minutes
    const distance = (runInSeconds/paceInSeconds);

    res.json({
        "distance": distance.toFixed(2)
    });

}