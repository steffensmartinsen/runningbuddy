"use strict";
// Desc: Constants for the endpoints of the application
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT_DISTANCE = exports.ENDPOINT_PACE = exports.ENDPOINT_SPECIFIED_DISTANCE = exports.ENDPOINT_TIMES = exports.ENDPOINT_PACE_CALCULATOR = exports.INDEX_HTML = exports.BUILD_DIR = exports.FRONTEND_DIR = exports.PARENT_DIR = exports.FRONTEND_URL = exports.PRODUCTION_URL = exports.DEFAULT_URL = exports.ROOT = exports.CLIENT_PORT = exports.SERVER_PORT = void 0;
// PORT is the port number on which the server will run
exports.SERVER_PORT = process.env.SERVER_PORT || "8080";
// SERVERPORT is the port number on which the server will run
exports.CLIENT_PORT = process.env.CLIENT_PORT || "3000";
// LOCALHOST is the localhost URL
const LOCALHOST = process.env.LOCALHOST || "http://localhost:";
// ROOT is the root path of the application
exports.ROOT = '/';
// DEFAULT_URL is the default URL of the REACT application
exports.DEFAULT_URL = `${LOCALHOST}${exports.CLIENT_PORT}`;
// PRODUCTION_URL is the URL of the production application
exports.PRODUCTION_URL = `${LOCALHOST}${exports.SERVER_PORT}`;
// FRONTEND_URL is the URL of the frontend application
exports.FRONTEND_URL = process.env.FRONTEND_URL || "https://runningbuddy.onrender.com";
// PARENT_DIR is the cd command to the parent directory
exports.PARENT_DIR = "..";
// FRONTEND_DIR is the name of the frontend directory
exports.FRONTEND_DIR = "frontend";
// BUILD_DIR is the name of the build directory
exports.BUILD_DIR = "build";
// INDEX_HTML is the name of the index.html file
exports.INDEX_HTML = "index.html";
// END_PACE_CALCULATOR is the path to the pace calculator endpoint
exports.ENDPOINT_PACE_CALCULATOR = '/pace-calculator';
// ENDPOINT_DISTANCES is the path to the distances endpoint
exports.ENDPOINT_TIMES = '/times';
// ENDPOINT_SPECIFIED_DISTANCE is the path to the specified distance endpoint
exports.ENDPOINT_SPECIFIED_DISTANCE = '/specified-distance';
// ENDPOINT_PACE is the path to the pace endpoint
exports.ENDPOINT_PACE = '/pace';
exports.ENDPOINT_DISTANCE = "/distance";
