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
exports.PaceHandler = PaceHandler;
const constants = __importStar(require("../constants"));
const helpers = __importStar(require("../helpers/functions"));
// PaceHandler is the handler function for the /pace endpoint. It only accepts POST requests.
function PaceHandler(req, res) {
    if (req.method === constants.HTTP_METHOD_POST) {
        CalculatePace(req, res);
    }
    else {
        res.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED).send(constants.TEXT_METHOD_NOT_ALLOWED);
    }
}
// CalculatePace is the function to calculate the pace given a distance and a time
function CalculatePace(req, res) {
    let distance = req.body.distance;
    const { distanceUnit, time, paceUnit } = req.body;
    // Validation of the input parameters
    if (!helpers.ValidatePaceEndpoint(distanceUnit, paceUnit, time.hour, time.min, time.sec, distance)) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).send(constants.INVALID_INPUT);
    }
    // Convert the time to minutes for the pace calculation
    const timeInMinutes = helpers.TimeToMinutes(time.hour, time.min, time.sec);
    // Align the units if they are different
    if (distanceUnit != paceUnit) {
        distance = helpers.AlignUnits(distanceUnit, paceUnit, distance);
    }
    // Calculate the pace in minutes per kilometer
    const pace = timeInMinutes / distance;
    // Seperate the fraction from the integer
    const min = Math.floor(pace);
    const sec = Math.round((pace - min) * 60);
    res.json({
        "minutes": helpers.FormatNumber(min),
        "seconds": helpers.FormatNumber(sec)
    });
}
