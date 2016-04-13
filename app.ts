/// <reference path="typings/main.d.ts" />

import * as express from "express";
import {urlencoded, json} from "body-parser";
import * as ExpressBrute from "express-brute";
const app: express.Application = express();
import {Server} from "http";

// importing API
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

var store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
var bruteForce = new ExpressBrute(store, {
   freeRetries: 10,
   minWait: 60 * 1000
});

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use("/", bruteForce.prevent);
app.use("/", bruteForce.prevent, apiComplex);
app.use("/", bruteForce.prevent, apiEntity);
app.use("/", bruteForce.prevent, apiObject);

const server: Server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
