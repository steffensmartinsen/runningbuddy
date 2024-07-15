import { Request, Response } from 'express';
import * as constants from '../constants';
import { Distance5K } from '../structs/distance-structs';

// PaceCalculatorPOST is the function that serves the '/pace-calculator' path
export function PaceCalculatorPOST (req: Request, res: Response): void {

    let min = req.body.minutes;
    let sec = req.body.seconds;

    console.log(min, sec);

    let pace = Calculator5k(min, sec);

    res.json({
        minutes: pace.minutes,
        seconds: pace.seconds
    }).sendStatus(200);
}

// Calculator5k is the function that calculates the 5k time for a given pace
function Calculator5k(min: number, seconds: number): Distance5K {

    min = min * 60;
    let time = min + seconds;

    let distance_time = time * constants.FIVE_K;
    let distance_min = distance_time / constants.MINUTES_IN_HOUR;
    let distance_sec = distance_time % constants.MINUTES_IN_HOUR;

    return {
        minutes: Math.floor(distance_min),
        seconds: distance_sec
    }
}