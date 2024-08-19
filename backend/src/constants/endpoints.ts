// Desc: Constants for the endpoints of the application

// PORT is the port number on which the server will run
export const SERVER_PORT = process.env.SERVER_PORT || "8080";

// SERVERPORT is the port number on which the server will run
export const CLIENT_PORT = process.env.CLIENT_PORT ||  "3000";

// LOCALHOST is the localhost URL
const LOCALHOST = process.env.LOCALHOST || "http://localhost:";

// ROOT is the root path of the application
export const ROOT = '/';

// DEFAULT_URL is the default URL of the REACT application
export const DEFAULT_URL = `${LOCALHOST}${CLIENT_PORT}`;

// END_PACE_CALCULATOR is the path to the pace calculator endpoint
export const ENDPOINT_PACE_CALCULATOR = '/pace-calculator';

// ENDPOINT_DISTANCES is the path to the distances endpoint
export const ENDPOINT_TIMES = '/times';

// ENDPOINT_SPECIFIED_DISTANCE is the path to the specified distance endpoint
export const ENDPOINT_SPECIFIED_DISTANCE = '/specified-distance';

// ENDPOINT_PACE is the path to the pace endpoint
export const ENDPOINT_PACE = '/pace';

export const ENDPOINT_DISTANCE = "/distance"