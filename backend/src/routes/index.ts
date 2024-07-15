import * as constants from '../constants';
import express from 'express';
import { PaceCalculatorPOST } from './pace-calculator';

const router = express.Router();

router.get(constants.ROOT, (req, res) => {
    res.send('Hello World!');
});
router.post(constants.ENDPOINT_DISTANCES, PaceCalculatorPOST);


module.exports = router;