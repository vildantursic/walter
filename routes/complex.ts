/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {complexModel} from "../models/models";

let checkData: Function = (param: String): Boolean => {
    // add more filters to data to see if it fit your needs
    if (param.length === 24) {
        return true;
    }
    return false;
};

let returnObject: Function = (err: Error, data: Object) => {
    if (err) {
        throw err;
    }
    return data;
};

const api = router.route("/api/complex/:id*?");

api.get(async (req: Request, res: Response) => {
    if (!checkData(req.params.id)) {
        res.json("invalid object for search");
    } else {
        let obj: Object = await complexModel.find({_id: req.params.id}).exec(returnObject);
        res.json(obj);
    }
});

api.post((req: Request, res: Response) => {

    // check data before saving
    let obj = new complexModel(req.body);
    obj.save((err: Error, data: Object) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

api.put(async (req: Request, res: Response) => {

    let id: string = req.params.id;
    let obj: Object = await complexModel.update({ _id: id }, { $set: req.body }).exec(returnObject);
    res.json(obj);
});

api.delete(async (req: Request, res: Response) => {

    let id: string = req.params.id;
    let obj: Object = await complexModel.findByIdAndRemove(id).exec(returnObject);
    res.json(obj);
});

export const apiComplex = router;
