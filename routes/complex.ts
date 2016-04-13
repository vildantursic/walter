/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {complexModel} from "../models/models";

const api = router.route("/api/complex/:id*?");

api.get((req: Request, res: Response) => {

    let id: string = req.params.id;

    // if (entity !== undefined) {
        complexModel.find({_id: id}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    // }
    // else {
    //     complexModel.find((err, data) => {
    //         if (err) throw err;
    //         res.json(data);
    //     });
    // }
});

api.post((req: Request, res: Response) => {

    let data = req.body;
    let complex = new complexModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.id;
    complexModel.update({ _id: id }, { $set: req.body }, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.id;
    complexModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

export const apiComplex = router;
