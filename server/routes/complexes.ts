import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {complexModel} from "../models/models";
import {Stream} from "stream";

const api: IRoute = router.route("/api/complex");

api.get(async (req: Request, res: Response) => {
    let stream: Stream = await complexModel
        .find({})
        .stream({ transform: JSON.stringify });

    stream.on("data", (doc: Object) => {
        res.write(doc, "ascii");
    }).on("error", (err: Error) => {
        console.log(err);
    }).on("close", () => {
        res.end("Done");
    });
});

export const apiComplexes = router;
