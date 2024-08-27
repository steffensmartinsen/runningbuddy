import { Request, Response } from 'express';
import { ENDPOINT_PACE_CALCULATOR, FRONTEND_URL } from '../constants';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    // Simply redirect to the pace calculator endpoint
    res.redirect(308, FRONTEND_URL + ENDPOINT_PACE_CALCULATOR);

}