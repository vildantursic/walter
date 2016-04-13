/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {complexModel} from "../models/models";

let checkData: Function = (param: Object): Boolean => {
    if (param) {
        return true;
    }
    return false;
};

const api = router.route("/api/complex/:id*?");

api.get((req: Request, res: Response) => {

    let check = checkData(req.params.id);

    complexModel.find(check, (err: Error, data: Array<Object>) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
    // await complexModel.find({_id: id}).exec((err: Error, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(data);
    // });
});

api.post((req: Request, res: Response) => {

    let data: Object = req.body;
    let complex = new complexModel(data);
    complex.save((err: Error) => {
        if (err) {
            throw err;
        }
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.id;
    complexModel.update({ _id: id }, { $set: req.body }, (err: Error, data: Array<Object>) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.id;
    complexModel.findByIdAndRemove(id, (err: Error, data: Array<Object>) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

export const apiComplex = router;
