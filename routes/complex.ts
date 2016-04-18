/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {complexModel} from "../models/models";
import {checkObjectIDValidity, checkIfDataIsArray} from "../helpers/validation";
import {errorIDValidationMessages, errorApiMessages} from "../helpers/errorMessages";
import {Stream} from "stream";

const api: IRoute = router.route("/api/complex/:id*?");

api.get(async (req: Request, res: Response) => {
    // if (!checkObjectIDValidity(req.params.id)) {
    //     res.status(400).json(errorIDValidationMessages.getMessage);
    // }
    let stream: Stream = await complexModel
        .find({})
        .stream({ transform: JSON.stringify });
        // .lean()
        // .exec()
        // .error((e: Error) => {
        //     res.status(400).send({ error: errorApiMessages.getMessage + e });
        // });

    stream.on("data", (doc: Object) => {
        // res.json(doc);
        res.write(doc, "ascii");

    }).on("error", (err: Error) => {
        console.log(err);
    }).on("close", () => {
        // console.log("Closed");
        res.end("Done");

    });
});

api.post(async (req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body);

    let dataRes: Object = await complexModel.insertMany(obj);
    res.status(200).json(dataRes);
});

api.put(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.putMessage);
    }
    let obj: Object = await complexModel
        .update({ _id: req.params.id }, { $set: req.body })
        .lean()
        .exec()
        .error((e: Error) => {
            res.status(400).send({ error: errorApiMessages.putMessage + e });
        });
    res.status(200).json(obj);
});

api.delete(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.deleteMessage);
    }
    let obj: Object = await complexModel
        .findByIdAndRemove(req.params.id)
        .lean()
        .exec()
        .error((e: Error) => {
            res.status(400).send({ error: errorApiMessages.deleteMessage + e });
        });
    res.status(200).json(obj);
});

export const apiComplex = router;
