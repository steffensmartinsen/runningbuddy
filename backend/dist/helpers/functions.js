"use strict";
// Desc: Helper functions used throughout the application
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumber = FormatNumber;
function FormatNumber(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num.toString();
}
