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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceHandler = DistanceHandler;
const constants = __importStar(require("../constants"));
const functions_1 = require("../helpers/functions");
// DistanceHandler is the function that servers the /pace-calculator/distance endpoint. It only accepts POST requests.
function DistanceHandler(req, res) {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculateDistance(req, res);
    }
    else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(constants.TEXT_METHOD_NOT_ALLOWED);
    }
}
// CalculateDistance is the function that calculates the distance based on the running time and pace.
function CalculateDistance(req, res) {
    // Extract the distance unit and the pace unit
    const { distanceUnit, paceUnit } = req.body;
    // Extract the running time input paramteres
    const runningHour = req.body.time.hour;
    const runningMin = req.body.time.min;
    const runningSec = req.body.time.sec;
    // Extract the pace input parameters
    const paceMin = req.body.pace.min;
    const paceSec = req.body.pace.sec;
    // Validate the input parameters
    if (!(0, functions_1.ValidatePace)(paceMin, paceSec) || !(0, functions_1.ValidateTime)(runningHour, runningMin, runningSec) || !(0, functions_1.ValidateUnit)(distanceUnit) || !(0, functions_1.ValidateUnit)(paceUnit)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(constants.INVALID_INPUT);
        return;
    }
    // Calculate running time to seconds
    const runInSeconds = (0, functions_1.TimeToSeconds)(runningHour, runningMin, runningSec);
    // Calculate pace to seconds
    let paceInSeconds = (0, functions_1.PaceToSeconds)(paceMin, paceSec);
    console.log(paceInSeconds);
    if (distanceUnit === constants.UNIT_MILES && paceUnit === constants.UNIT_KM) {
        paceInSeconds = (0, functions_1.PaceKmToPaceMile)(paceInSeconds);
        console.log("inside first if");
        console.log(paceInSeconds);
    }
    if (distanceUnit === constants.UNIT_KM && paceUnit === constants.UNIT_MILES) {
        paceInSeconds = (0, functions_1.PaceMileToPaceKm)(paceInSeconds);
        console.log("inside second if");
        console.log(paceInSeconds);
    }
    // Calculate the distance and multiply it by 60 minutes
    const distance = (runInSeconds / paceInSeconds);
    res.json({
        "distance": distance.toFixed(2)
    });
}
