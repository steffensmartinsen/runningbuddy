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
exports.PaceCalculatorPOST = PaceCalculatorPOST;
const constants = __importStar(require("../constants"));
// PaceCalculatorPOST is the function that serves the '/pace-calculator' path
function PaceCalculatorPOST(req, res) {
    let min = req.body.minutes;
    let sec = req.body.seconds;
    console.log(min, sec);
    let pace = Calculator5k(min, sec);
    res.json({
        minutes: pace.minutes,
        seconds: pace.seconds
    }).sendStatus(200);
}
// Calculator5k is the function that calculates the 5k time for a given pace
function Calculator5k(min, seconds) {
    min = min * 60;
    let time = min + seconds;
    let distance_time = time * constants.FIVE_K;
    let distance_min = distance_time / constants.MINUTES_IN_HOUR;
    let distance_sec = distance_time % constants.MINUTES_IN_HOUR;
    return {
        minutes: Math.floor(distance_min),
        seconds: distance_sec
    };
}
