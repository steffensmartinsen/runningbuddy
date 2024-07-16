"use strict";
// Desc: Helper functions used throughout the application
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumber = FormatNumber;
exports.ValidateTime = ValidateTime;
// FormatNumber formats a number to have a leading zero if it is less than 10
function FormatNumber(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}
// ValidateTime validates the input parameters for running pace
function ValidateTime(min, sec) {
    return min >= 0 && sec >= 0 && sec < 60;
}
