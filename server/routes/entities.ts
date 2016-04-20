/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {entityModel} from "../models/models";
import {Stream} from "stream";
import {socketIO} from "../app";

const api: IRoute = router.route("/api/entity");

let entities = socketIO.of("/entities");

let entity = entities.on("connection", function (socket: SocketIO.Socket) {
});

api.get(async (req: Request, res: Response) => {
    let stream: Stream = await entityModel
        .find({})
        .stream({ transform: JSON.stringify });

    stream.on("data", (doc: Object) => {
        // res.write(doc, "ascii");
        entity.emit("entity", JSON.parse(doc));
    }).on("error", (err: Error) => {
        console.log(err);
    }).on("close", () => {
        res.end("Done");
    });
});

export const apiEntities = router;
