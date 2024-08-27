import { Request, Response } from 'express';
import { REDIRECT_URL } from '../constants';
import { SetCORSHeaders } from '../helpers/functions';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    res.send("The root path is not supported, please visit the pace calculator at " + REDIRECT_URL);

}