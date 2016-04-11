/// <reference path="typings/main.d.ts" />

import * as express from "express";
import {urlencoded, json} from "body-parser";
import * as mongoose from "mongoose";

// import * as expressBrute from "express-brute";
const app: express.Application = express();

mongoose.connect("mongodb://ds064188.mlab.com:64188/walter");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
   console.log("we are connected");
});

// app.use(express.static("./public"));
// app.use(express.static("./public/node_modules"));

// let bruteForceConf = {
//   freeRetries: 5,
//   proxyDepth: 1,
//   minWait: 5 * 60 * 1000,
//   maxWait: 60 * 60 * 1000
// };

// const store = new expressBrute.MemoryStore(); // not for production
// const bruteforce = new expressBrute(store);

// importing API
import {apiRoute} from "./routes/api-route";

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", apiRoute);

const server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
