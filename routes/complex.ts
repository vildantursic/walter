/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {complexModel} from "../models/models";

let checkData: Function = (param: String): Boolean => {
    // add more filters and if statement for data to see if it fit your needs
    return param.length === 24;
};
let checkIfDataIsArray: Function = (data): Array<Object> => {
    if (Array.isArray(data)) {
        return data;
    } else {
        let arr: Array<Object> = [];
        arr.push(data);
        return arr;
    }
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

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body);

    complexModel.insertMany(obj, (err: Error, data: Object) => {
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
        let obj: Object = await complexModel.update({ _id: req.params.id }, { $set: req.body }).exec(returnObject);
        res.json(obj);
    }
});

api.delete(async (req: Request, res: Response) => {

    if (!checkData(req.params.id)) {
        res.json("invalid object for deletion");
    } else {
        let obj: Object = await complexModel.findByIdAndRemove(req.params.id).exec(returnObject);
        res.json(obj);
    }
});

export const apiComplex = router;
