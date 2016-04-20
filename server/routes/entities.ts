import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {entityModel} from "../models/models";
import {Stream} from "stream";

const api: IRoute = router.route("/api/entity");

api.get(async (req: Request, res: Response) => {
    let stream: Stream = await entityModel
        .find({})
        .limit(1)
        .select({_id: 0, name: 1})
        .lean(true)
        .stream({ transform: JSON.stringify });

    res.type('application/json');

    stream.on("data", (doc: string) => {
        res.write(doc);
    }).on("error", (err: Error) => {
        console.log(err);
    }).on("close", () => {
        res.end();
    });
});

export const apiEntities = router;
