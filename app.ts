/// <reference path="typings/main.d.ts" />

import * as express from "express";
import {urlencoded, json} from "body-parser";
import {conn} from "./connections/connection";
// import * as expressBrute from "express-brute";
const app: express.Application = express();

conn;

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
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", apiRoute);
app.use("/", apiComplex);
app.use("/", apiEntity);
app.use("/", apiObject);

const server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
