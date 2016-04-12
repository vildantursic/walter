/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {_objectModel} from "../models/models";

const api = router.route("/api/object/:entity");

api.get((req: Request, res: Response) => {

    let entity: string = req.params.entity;
    if (entity === "all") {
        _objectModel.find((err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        _objectModel.find({_id: entity}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    console.log("posted");

    let data: Object = {
        guid: "1234567890",
        complex: {
            name: "name 1",
            address: "address 1",
            location: [{
                lat : "43",
                lng : "18"
            }]
        },
        entity: {
            name: "name 2",
            address: "address 2",
        },
        model: "model 1",
        category: "category 1",
        group: "group 1",
        level: "level 1",
        space: "space 1",
        checkouts: {
            projects: [{id: "123"}, {id: "321"}]
        },
        geometry: [{id: "456"}, {id: "654"}],
        material: [{id: "789"}, {id: "987"}]
    };

    let complex = new _objectModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    console.log(req.body.key);

    let id: string = req.params.entity;
    _objectModel.update({ _id: id }, { $set: { name: req.body.name }}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.entity;
    _objectModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

export const apiObject = router;
