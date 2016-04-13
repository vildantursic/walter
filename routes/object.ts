/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {objectModel} from "../models/models";
import {checkData, returnObject, checkIfDataIsArray} from "../functions/validation";

const api = router.route("/api/object/:id*?");

api.get(async (req: Request, res: Response) => {
    if (!checkData(req.params.id)) {
        res.json("invalid object for search");
    } else {
        let obj: Object = await objectModel.find({_id: req.params.id}).exec(returnObject);
        res.json(obj);
    }
});

api.post((req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body).then((data: Array<Object>) => { console.log(data); });

    objectModel.insertMany(obj, (err: Error, data: Object) => {
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
        let obj: Object = await objectModel.update({ _id: req.params.id }, { $set: req.body }).exec(returnObject);
        res.json(obj);
    }
});

api.delete(async (req: Request, res: Response) => {

    if (!checkData(req.params.id)) {
        res.json("invalid object for deletion");
    } else {
        let obj: Object = await objectModel.findByIdAndRemove(req.params.id).exec(returnObject);
        res.json(obj);
    }
});

export const apiObject = router;
