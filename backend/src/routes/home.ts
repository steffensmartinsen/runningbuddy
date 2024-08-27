import { Request, Response } from 'express';
import { REDIRECT_URL } from '../constants';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    // res.send(`<p>The root path is not supported, please visit the pace calculator at </p><a href=${REDIRECT_URL}>${REDIRECT_URL}</a>`);
    res.redirect(301, REDIRECT_URL);
    console.log("The root path is not supported, please visit the pace calculator at " + REDIRECT_URL);

}