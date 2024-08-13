"use strict";
// Desc: Constants for the endpoints of the application
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT_DISTANCE = exports.ENDPOINT_PACE = exports.ENDPOINT_SPECIFIED_DISTANCE = exports.ENDPOINT_TIMES = exports.ENDPOINT_PACE_CALCULATOR = exports.DEFAULT_URL = exports.ROOT = exports.SERVERPORT = exports.PORT = void 0;
// PORT is the port number on which the server will run
exports.PORT = 8080;
// SERVERPORT is the port number on which the server will run
exports.SERVERPORT = 3000;
// ROOT is the root path of the application
exports.ROOT = '/';
// DEFAULT_URL is the default URL of the application
exports.DEFAULT_URL = `http://localhost:${exports.SERVERPORT}`;
// END_PACE_CALCULATOR is the path to the pace calculator endpoint
exports.ENDPOINT_PACE_CALCULATOR = '/pace-calculator';
// ENDPOINT_DISTANCES is the path to the distances endpoint
exports.ENDPOINT_TIMES = '/times';
// ENDPOINT_SPECIFIED_DISTANCE is the path to the specified distance endpoint
exports.ENDPOINT_SPECIFIED_DISTANCE = '/specified-distance';
// ENDPOINT_PACE is the path to the pace endpoint
exports.ENDPOINT_PACE = '/pace';
exports.ENDPOINT_DISTANCE = "/distance";
