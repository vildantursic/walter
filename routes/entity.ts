/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {entityModel} from "../models/models";

const api = router.route("/api/entity/:entity");

api.get((req: Request, res: Response) => {

    let entity: string = req.params.entity;
    if (entity === "all") {
        entityModel.find((err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        entityModel.find({_id: entity}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    console.log("posted");

    let data: Object = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address
    };

    let complex = new entityModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.entity;
    entityModel.update({ _id: id }, { $set: { name: req.body.name }}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.entity;
    entityModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


export const apiEntity = router;
