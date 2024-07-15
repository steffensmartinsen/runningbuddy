"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
// Home is the function that serves the root path ('/')
function Home(req, res) {
    res.json({
        message: "This service root path is not serviced. See the documentation for endpoints to invoke"
    });
}
