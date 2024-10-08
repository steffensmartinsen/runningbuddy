// Desc: Constants for the endpoints of the application

// PORT is the port number on which the server will run
export const SERVER_PORT = process.env.SERVER_PORT || "8080";

// SERVERPORT is the port number on which the server will run
export const CLIENT_PORT = process.env.CLIENT_PORT ||  "3000";

// LOCALHOST is the localhost URL
export const PRODUCTION_URL = process.env.PRODUCTION_URL || "http://localhost:8080";

// ROOT is the root path of the application
export const ROOT = '/';

// DEFAULT_URL is the default URL of the REACT application
export const DEFAULT_URL = `${PRODUCTION_URL}${CLIENT_PORT}`;

// FRONTEND_URL is the URL of the frontend application
export const FRONTEND_URL = process.env.FRONTEND_URL || "https://runningbuddy.onrender.com";

// PARENT_DIR is the cd command to the parent directory
export const PARENT_DIR = "..";

// FRONTEND_DIR is the name of the frontend directory
export const FRONTEND_DIR = "frontend";

// BUILD_DIR is the name of the build directory
export const BUILD_DIR = "build";

// INDEX_HTML is the name of the index.html file
export const INDEX_HTML = "index.html";

// END_PACE_CALCULATOR is the path to the pace calculator endpoint
export const ENDPOINT_PACE_CALCULATOR = '/pace-calculator';

// ENDPOINT_DISTANCES is the path to the distances endpoint
export const ENDPOINT_TIMES = '/times';

// ENDPOINT_SPECIFIED_DISTANCE is the path to the specified distance endpoint
export const ENDPOINT_SPECIFIED_DISTANCE = '/specified-distance';

// ENDPOINT_PACE is the path to the pace endpoint
export const ENDPOINT_PACE = '/pace';

// ENDPOINT_DISTANCE is the path to the distance endpoint
export const ENDPOINT_DISTANCE = "/distance"

// REDIRECT_URL is the URL to redirect at the home page
export const REDIRECT_URL = `${FRONTEND_URL}${ENDPOINT_PACE_CALCULATOR}`;