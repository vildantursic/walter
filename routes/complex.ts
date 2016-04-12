/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {_complexModel} from "../models/models";

const api = router.route("/api/complex/:entity");

api.get((req: Request, res: Response) => {

    let entity: string = req.params.entity;
    if (entity === "all") {
        _complexModel.find((err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        _complexModel.find({_id: entity}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    console.log("posted");

    let data: Object = {
        complex: {
            name: req.body.name,
            address: req.body.address,
            location: [{
                lat : req.body.lat,
                lng : req.body.lng
            }]
        }
    };

    let complex = new _complexModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.entity;
    _complexModel.update({ _id: id }, { $set: { name: req.body.name }}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
    // _complexModel.findOneAndUpdate({ _id: req.body.id }, { $set: { complex: { name: req.body.name }}}, (err, data) => {
    //     if (err) throw err;
    //     res.json(data);
    // });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.entity;
    _complexModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

export const apiComplex = router;
