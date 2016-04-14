/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {entityModel} from "../models/models";
import {checkObjectIDValidity, checkIfDataIsArray} from "../helpers/validation";
import {errorIDValidationMessages, errorApiMessages} from "../helpers/errorMessages";

const api: IRoute = router.route("/api/entity/:id*?");

api.get(async (req: Request, res: Response) => {
    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.getMessage);
    } else {
        let obj: Object = await entityModel
            .find({_id: req.params.id})
            .exec()
            .catch((e: Error) => {
                res.status(500).send({ error: errorApiMessages.getMessage + e });
            });
        res.json(obj);
    }
});

api.post(async (req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = await checkIfDataIsArray(req.body);

    let dataRes: Object = await entityModel.insertMany(obj, (err: Error, data: Object) => {
        if (err) {
            throw err;
        }
        return data;
    }).catch((e: Error) => {
        res.status(500).send({ error: errorApiMessages.postMessage + e });
    });
    res.json(dataRes);
});

api.put(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.json(errorIDValidationMessages.putMessage);
    } else {
        let obj: Object = await entityModel
            .update({ _id: req.params.id }, { $set: req.body })
            .exec()
            .catch((e: Error) => {
                res.status(500).send({ error: errorApiMessages.putMessage + e });
            });
        res.json(obj);
    }
});

api.delete(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.json(errorIDValidationMessages.deleteMessage);
    } else {
        let obj: Object = await entityModel
            .findByIdAndRemove(req.params.id)
            .exec()
            .catch((e: Error) => {
                res.status(500).send({ error: errorApiMessages.deleteMessage + e });
            });
        res.json(obj);
    }
});

export const apiEntity = router;
