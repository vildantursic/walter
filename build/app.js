"use strict";
const express = require("express");
const body_parser_1 = require("body-parser");
const expressBrute = require("express-brute");
const app = express();
app.use(express.static("./public"));
app.use(express.static("./public/node_modules"));
let bruteForceConf = {
    freeRetries: 5,
    proxyDepth: 1,
    minWait: 5 * 60 * 1000,
    maxWait: 60 * 60 * 1000
};
const store = new expressBrute.MemoryStore();
const bruteforce = new expressBrute(store);
const api_route_1 = require("./routes/api-route");
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use("/", api_route_1.apiRoute);
const server = app.listen(4000, "localhost", () => {
    const port = server.address().port;
    console.log("Listening on http://localhost:" + port);
});
