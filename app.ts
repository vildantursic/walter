/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app: express.Application = express();
import {urlencoded, json} from "body-parser";
import {Server} from "http";
import * as ExpressBrute from "express-brute";
import * as expressJWT from "express-jwt";
import {readFileSync} from "fs";

// importing API
import {token} from "./routes/token";
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

let store = new ExpressBrute.MemoryStore();
let bruteForce = new ExpressBrute(store, {
   freeRetries: 20,
   minWait: 60 * 1000
});

app.use(urlencoded({ extended: true }));
app.use(json());

let key: string = readFileSync("./helpers/key.txt").toString();
app.use(expressJWT({ secret: key}).unless({path: ["/token"]}));
app.use("/", bruteForce.prevent, token);
app.use("/", bruteForce.prevent, apiComplex);
app.use("/", bruteForce.prevent, apiEntity);
app.use("/", bruteForce.prevent, apiObject);

const server: Server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
