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
const constants = __importStar(require("../constants"));
const express_1 = __importDefault(require("express"));
const times_1 = require("./times");
const pace_1 = require("./pace");
const distance_1 = require("./distance");
const home_1 = require("./home");
// Create an Express router
const router = express_1.default.Router();
// Serve the paths of the pace-calculator endpoint
router.get(constants.ROOT, home_1.Home);
// Distance calculation routes
router.use(constants.ENDPOINT_TIMES, times_1.CalculateTimeHandler);
router.use(constants.ENDPOINT_SPECIFIED_DISTANCE, times_1.CalculateSpecifiedDistanceTimeHandler);
// Pace calculation route
router.use(constants.ENDPOINT_PACE, pace_1.PaceHandler);
// Distance calculation route
router.use(constants.ENDPOINT_DISTANCE, distance_1.DistanceHandler);
module.exports = router;
