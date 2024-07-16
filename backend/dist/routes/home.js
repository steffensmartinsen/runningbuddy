"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
// Home is the function that serves the root path ('/')
function Home(req, res) {
    res.json({
        message: "This path is not served. See the documentation for endpoints to invoke."
    });
}
