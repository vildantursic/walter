/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app: express.Application = express();
import {urlencoded, json} from "body-parser";
import {readFileSync} from "fs";
import {Server} from "http";
import * as ExpressBrute from "express-brute";
import * as expressJWT from "express-jwt";
// make it better
import ExpressBruteMiddleware = require("express-brute");
import MemoryStoreOptions = require("express-brute");

// importing API
import {token} from "./routes/token";
import {refreshToken} from "./routes/refresh-token";
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

let store: MemoryStoreOptions = new ExpressBrute.MemoryStore();
let bruteForce: ExpressBruteMiddleware = new ExpressBrute(store, {
   freeRetries: 20,
   minWait: 60 * 1000
});

app.use(urlencoded({ extended: true }));
app.use(json());

let key: string = readFileSync("./helpers/key.ts").toString();
app.use(expressJWT({ secret: key}).unless({path: ["/token"]}));
app.use("/", bruteForce.prevent, token);
app.use("/", bruteForce.prevent, refreshToken);
app.use("/", bruteForce.prevent, apiComplex);
app.use("/", bruteForce.prevent, apiEntity);
app.use("/", bruteForce.prevent, apiObject);

const server: Server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
