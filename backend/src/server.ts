// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import * as constants from './constants';
import { Home } from './routes/home';

const routes = require('./routes/index');

// Create an Express application
const app = express();
app.use(express.json());

// Serve the root path of the application
app.get(constants.ROOT, Home);

// Serve the pace calculator endpoint
app.use(constants.ENDPOINT_PACE_CALCULATOR, routes);

// Specify the port number for the server
const port: number = constants.PORT

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
