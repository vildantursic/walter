/// <reference path="typings/main.d.ts" />

import * as express from "express";
const app: express.Application = express();

// importing API
import {apiRoute} from "./app/apiRoute";

app.use("/", apiRoute);

const server = app.listen(3000, "localhost", () => {
   const port: number = server.address().port;
   console.log("Listening on http://localhost:" + port);
});
