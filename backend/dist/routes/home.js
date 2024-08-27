"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
const constants_1 = require("../constants");
// Home is the function that serves the root path ('/')
function Home(req, res) {
    res.send(`<p>The root path is not supported, please visit the pace calculator at </p><a href=${constants_1.REDIRECT_URL}>${constants_1.REDIRECT_URL}</a>`);
    console.log("The root path is not supported, please visit the pace calculator at " + constants_1.REDIRECT_URL);
}
