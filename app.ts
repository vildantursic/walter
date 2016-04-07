/// <reference path="typings/main.d.ts" />

import * as express from "express";
import {urlencoded, json} from "body-parser";
import * as expressBrute from "express-brute";
const app: express.Application = express();

let bruteForceConf = {
  freeRetries: 5,
  proxyDepth: 1,
  minWait: 5 * 60 * 1000,
  maxWait: 60 * 60 * 1000
};

const store = new expressBrute.MemoryStore(); // not for production
const bruteforce = new expressBrute(store);

// importing API
import {apiRoute} from "./routes/api-route";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", apiRoute);

const server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
