import * as constants from '../constants';
import express from 'express';
import { DistanceTimesPOST } from './distances';

const router = express.Router();

router.get(constants.ROOT, (req, res) => {
    res.send('Hello World!');
});
router.post(constants.ENDPOINT_DISTANCES, DistanceTimesPOST);


module.exports = router;