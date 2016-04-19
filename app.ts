/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app: express.Application = express();
import {urlencoded, json} from "body-parser";
import * as http from "http";
import * as ExpressBrute from "express-brute";
import * as expressJWT from "express-jwt";
import {key} from "./helpers/key";
import * as io from "socket.io";

let server: http.Server = http.Server(app);
export let socketIO: SocketIO.Server = io.listen(server);

// importing API
// token
import {token} from "./routes/token";
import {refreshToken} from "./routes/refresh-token";
// complex
import {apiComplex} from "./routes/complex";
import {apiComplexes} from "./routes/complexes";
// entity
import {apiEntity} from "./routes/entity";
import {apiEntities} from "./routes/entities";
// object
import {apiObject} from "./routes/object";
import {apiObjects} from "./routes/objects";

let store: ExpressBrute.MemoryStore = new ExpressBrute.MemoryStore();
let bruteForce: ExpressBrute = new ExpressBrute(store, {
   freeRetries: 2000,
   minWait: 60 * 1000
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   // res.header("Access-Control-Allow-Credentials", true);
   // res.header("Authorization", "Bearer " + localStorage.token);
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// app.use(expressJWT({ secret: key}).unless({path: ["/token"]}));
// token
app.use("/", bruteForce.prevent, token);
app.use("/", bruteForce.prevent, refreshToken);
// complex
app.use("/", bruteForce.prevent, apiComplex);
app.use("/", bruteForce.prevent, apiComplexes);
// entity
app.use("/", bruteForce.prevent, apiEntity);
app.use("/", bruteForce.prevent, apiEntities);
// object
app.use("/", bruteForce.prevent, apiObject);
app.use("/", bruteForce.prevent, apiObjects);

server.listen(4000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});

socketIO.emit("day", {a: "A"});
