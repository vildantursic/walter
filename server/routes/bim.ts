import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {bimModel} from "../models/models";
import {Stream} from "stream";
import {entityIO} from "../connections/socket";

const api: IRoute = router.route("/api/bim");

api.get(async (req: Request, res: Response) => {
    let stream: Stream = await bimModel
        .find({})
        .lean(true)
        .stream({ transform: JSON.stringify });

    res.type("application/json");

    stream.on("data", (doc: string) => {
        // res.write();
        entityIO.emit("entity", doc);
    }).on("error", (err: Error) => {
        console.log(err);
    }).on("close", () => {
        res.end(JSON.stringify({completed: true}));
    });
});

export const apiBim = router;
