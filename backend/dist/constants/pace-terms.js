"use strict";
// Desc: Constants related to terminology used in the application
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE = exports.UNIT_KM = exports.UNIT_MILES = exports.CONVERSION_MILES_AND_KM = exports.DISTANCES_ARRAY = exports.DISTANCE_MARATHON = exports.DISTANCE_HALF_MARATHON = exports.DISTANCE_TEN_K = exports.DISTANCE_FIVE_K = exports.SECONDS_IN_MINUTE = exports.MINUTES_IN_HOUR = void 0;
// MINUTES_IN_HOUR is the number of minutes in an hour
exports.MINUTES_IN_HOUR = 60;
// SECONDS_IN_MINUTE is the number of seconds in a minute
exports.SECONDS_IN_MINUTE = 60;
// DISTANCE_FIVE_K represents 5 kilometers
exports.DISTANCE_FIVE_K = 5;
// DISTANCE_TEN_K represents 10 kilometers
exports.DISTANCE_TEN_K = 10;
// DISTANCE_HALF_MARATHON is the distance of a half marathon in kilometers
exports.DISTANCE_HALF_MARATHON = 21.097;
// DISTANCE_MARATHON is the distance of a marathon in kilometers
exports.DISTANCE_MARATHON = 42.195;
// DISTANCES_ARRAY is an array of the most common running distances
exports.DISTANCES_ARRAY = [exports.DISTANCE_FIVE_K, exports.DISTANCE_TEN_K, exports.DISTANCE_HALF_MARATHON, exports.DISTANCE_MARATHON];
exports.CONVERSION_MILES_AND_KM = 1.609344;
// UNIT_MILES is the unit of measurement for miles
exports.UNIT_MILES = "miles";
// UNIT_KM is the unit of measurement for kilometers
exports.UNIT_KM = "km";
// ONE is used to pass the distance parameter validation in CalculateDistance function
exports.ONE = 1;
