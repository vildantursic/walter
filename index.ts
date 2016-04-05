/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app = express();

// importing API
import {comment} from "./app/app";

app.use("/", comment);

const server = app.listen(3000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
