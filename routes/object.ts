/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {objectModel} from "../models/models";

const api = router.route("/api/object/:id*?");

api.get((req: Request, res: Response) => {

    let id: string = req.params.id;
    objectModel.find({_id: id}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.post((req: Request, res: Response) => {

    let data = req.body;
    let complex = new objectModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.id;
    objectModel.update({ _id: id }, { $set: req.body}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.id;
    objectModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

export const apiObject = router;
