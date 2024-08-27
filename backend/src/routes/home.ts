import { Request, Response } from 'express';
import { REDIRECT_URL } from '../constants';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    // Simply redirect to the pace calculator endpoint
    res.redirect(301, REDIRECT_URL);
    console.log("redirect: ", REDIRECT_URL);

}