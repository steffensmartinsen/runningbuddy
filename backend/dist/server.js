"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module along with 'Request' and 'Response' types from express
const express_1 = __importDefault(require("express"));
const constants = __importStar(require("./constants"));
const home_1 = require("./routes/home");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const routes = require('./routes/index');
// Load the environment variables from the .env file
dotenv_1.default.config();
// Create an Express application
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Serve the root path of the application
app.get(constants.ROOT, home_1.Home);
// Serve static files from the React frontend
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'frontend', 'build')));
// Handle react routing, return all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
});
// Serve the pace calculator endpoint
app.use(constants.ENDPOINT_PACE_CALCULATOR, routes);
// Specify the port number for the server
const port = constants.SERVER_PORT;
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
