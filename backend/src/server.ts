// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import * as constants from './constants';
import { Home } from './routes/home';
import dotenv from 'dotenv';

const routes = require('./routes/index');

// Load the environment variables from the .env file
dotenv.config();

// Create an Express application
const app = express();
app.use(express.json());

// Serve the root path of the application
app.get(constants.ROOT, Home);

// Serve the pace calculator endpoint
app.use(constants.ENDPOINT_PACE_CALCULATOR, routes);

// Specify the port number for the server
const port: string = constants.SERVER_PORT;

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
