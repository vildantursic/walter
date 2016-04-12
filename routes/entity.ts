/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {_entityModel} from "../models/models";

const api = router.route("/api/entity/:entity");

api.get((req: Request, res: Response) => {

    let entity: string = req.params.entity;
    if (entity === "all") {
        _entityModel.find((err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        _entityModel.find({_id: entity}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    console.log("posted");

    let data: Object = {
        name: req.body.name,
        address: req.body.address,
        location: [{
            lat : req.body.lat,
            lng : req.body.lng
        }]
    };

    let complex = new _entityModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.entity;
    _entityModel.update({ _id: id }, { $set: { name: req.body.name }}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.entity;
    _entityModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


export const apiEntity = router;
