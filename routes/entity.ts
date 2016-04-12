/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {entityModel} from "../models/models";

const api = router.route("/api/entity/:id*?");

api.get((req: Request, res: Response) => {

    let id: string = req.params.id;
    if (id) {
        entityModel.find({_id: id}, (err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        entityModel.find((err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    let data = req.body;
    let complex = new entityModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.id;
    entityModel.update({ _id: id }, { $set: { name: req.body.name }}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.id;
    entityModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


export const apiEntity = router;
