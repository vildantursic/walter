/// <reference path="typings/main.d.ts" />

import * as express from "express";
import {urlencoded, json} from "body-parser";
import * as expressBrute from "express-brute";
const app: express.Application = express();

// importing API
import {apiComplex} from "./routes/complex";
import {apiEntity} from "./routes/entity";
import {apiObject} from "./routes/object";

// const bruteForce = new expressBrute();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", apiComplex);
app.use("/", apiEntity);
app.use("/", apiObject);

const server = app.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
