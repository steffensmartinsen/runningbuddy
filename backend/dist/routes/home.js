"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
const constants_1 = require("../constants");
// Home is the function that serves the root path ('/')
function Home(req, res) {
    // Simply redirect to the pace calculator endpoint
    res.redirect(301, constants_1.REDIRECT_URL);
}
