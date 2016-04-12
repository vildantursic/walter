/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {objectModel, complexModel} from "../models/models";

const api = router.route("/api/object/:entity");

api.get((req: Request, res: Response) => {

    let entity: string = req.params.entity;
    if (entity === "all") {
        objectModel.find((err, data) => {
            if (err) throw err;

            res.json(data);
        });
    }
    else {
        objectModel.find({_id: entity}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    }
});

api.post((req: Request, res: Response) => {

    console.log("posted");

    // let complexData: Object = {
    //     name: req.body.name,
    //     address: req.body.address,
    //     location: [{
    //         lat : req.body.lat,
    //         lng : req.body.lng
    //     }]
    // };

    // Have question about populating data to this object
    let data: Object = {
        guid: "1234567890",
        complex: "570cc35ce1a718602d5d790e",
        entity: "570ceb5ca6bf8cf002d32db0",
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

    let complex = new objectModel(data);
    complex.save((err) => {
        if (err) throw err;
        res.json("Document is saved");
    });
});

api.put((req: Request, res: Response) => {

    let id: string = req.params.entity;
    objectModel.update({ _id: id }, { $set: req.body}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

api.delete((req: Request, res: Response) => {

    let id: string = req.params.entity;
    objectModel.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

export const apiObject = router;
