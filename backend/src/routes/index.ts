import * as constants from '../constants';
import express from 'express';
import { CalculateSpecifiedDistanceTimeHandler, CalculateTimeHandler } from './times';
import { PaceHandler } from './pace';
import { DistanceHandler } from './distance';
import { Home } from './home';

// Create an Express router
const router = express.Router();

// Serve the paths of the pace-calculator endpoint
router.get(constants.ROOT, Home)

// Distance calculation routes
router.use(constants.ENDPOINT_TIMES, CalculateTimeHandler);
router.use(constants.ENDPOINT_SPECIFIED_DISTANCE, CalculateSpecifiedDistanceTimeHandler);

// Pace calculation route
router.use(constants.ENDPOINT_PACE, PaceHandler)

// Distance calculation route
router.use(constants.ENDPOINT_DISTANCE, DistanceHandler);

module.exports = router;