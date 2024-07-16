import { Request, Response } from 'express';

// Home is the function that serves the root path ('/')
export function Home (req: Request, res: Response): void {

    res.json({
        message: "This path is not served. See the documentation for endpoints to invoke."
    })
}