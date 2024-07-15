import { Request, Response } from 'express';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    res.json({
        message: "This service root path is not serviced. See the documentation for endpoints to invoke"
    })
}