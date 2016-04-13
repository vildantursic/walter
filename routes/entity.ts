/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {entityModel} from "../models/models";
import {checkData, checkIfDataIsArray} from "../functions/validation";

const api = router.route("/api/entity/:id*?");

api.get(async (req: Request, res: Response) => {
    if (!checkData(req.params.id)) {
        res.json("invalid object for search");
    } else {
        let obj: Object = await entityModel
            .find({_id: req.params.id})
            .exec()
            .catch((e: Error) => {
                console.log(e);
            });
        res.json(obj);
    }
});

api.post((req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body);

    entityModel.insertMany(obj, (err: Error, data: Object) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

api.put(async (req: Request, res: Response) => {

    if (!checkData(req.params.id)) {
        res.json("invalid object for update");
    } else {
        let obj: Object = await entityModel
            .update({ _id: req.params.id }, { $set: req.body })
            .exec()
            .catch((e: Error) => {
                console.log(e);
            });
        res.json(obj);
    }
});

api.delete(async (req: Request, res: Response) => {

    if (!checkData(req.params.id)) {
        res.json("invalid object for deletion");
    } else {
        let obj: Object = await entityModel
            .findByIdAndRemove(req.params.id)
            .exec()
            .catch((e: Error) => {
                console.log(e);
            });
        res.json(obj);
    }
});

export const apiEntity = router;
