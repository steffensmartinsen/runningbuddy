import * as constants from '../constants';
import express from 'express';
import { CalculateTimeHandler } from './times';
import { Home } from './home';

// Create an Express router
const router = express.Router();

// Serve the paths of the pace-calculator endpoint
router.get(constants.ROOT, Home)
router.use(constants.ENDPOINT_DISTANCES, CalculateTimeHandler);


module.exports = router;