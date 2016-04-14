/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app: express.Application = express();
import {urlencoded, json} from "body-parser";
import {Server} from "http";
import * as ExpressBrute from "express-brute";
import * as jwt from "express-jwt";

// importing API
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

let store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
let bruteForce = new ExpressBrute(store, {
   freeRetries: 10,
   minWait: 60 * 1000
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", apiComplex);
app.use("/", apiEntity);
app.use("/", apiObject);

const server: Server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
