/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {objectModel} from "../models/models";
import {checkObjectIDValidity, checkIfDataIsArray} from "../helpers/validation";
import {errorIDValidationMessages, errorApiMessages} from "../helpers/errorMessages";

const api: IRoute = router.route("/api/object/:id*?");

api.get(async (req: Request, res: Response) => {
    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.getMessage);
    }
    let obj: Object = await objectModel.find({_id: req.params.id})
        .populate("complex")
        .populate("entity")
        .lean()
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.getMessage + e });
        });

    res.status(200).json(obj);
});

api.post(async (req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body);

    let dataRes: Object = await objectModel.insertMany(obj);
    res.status(200).json(dataRes);
});

api.put(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.putMessage);
    }
    let obj: Object = await objectModel.
        update({ _id: req.params.id }, { $set: req.body })
        .lean()
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.postMessage + e });
        });
    res.status(200).json(obj);
});

api.delete(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.deleteMessage);
    }
    let obj: Object = await objectModel
        .findByIdAndRemove(req.params.id)
        .lean()
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.deleteMessage + e });
        });
    res.status(200).json(obj);
});

export const apiObject = router;
