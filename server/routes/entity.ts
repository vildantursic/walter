import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {entityModel} from "../models/models";
import {checkObjectIDValidity, checkIfDataIsArray} from "../helpers/validation";
import {errorIDValidationMessages, errorApiMessages} from "../helpers/errorMessages";

const api: IRoute = router.route("/api/entity/:id");

api.get(async (req: Request, res: Response) => {
    let id: string = req.params.id;
    if (!checkObjectIDValidity(id)) {
        res.status(400).json(errorIDValidationMessages.getMessage);
    }
    let obj: Object = await entityModel
        .find({_id: id})
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.postMessage + e });
        });

    res.json(obj);
});

api.post(async (req: Request, res: Response) => {

    // check data before saving also could do validation within function
    let obj: Array<Object> = checkIfDataIsArray(req.body);

    let dataRes: Object = await entityModel.insertMany(obj);
    res.status(200).json(dataRes);
});

api.put(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.putMessage);
    }
    let obj: Object = await entityModel
        .update({ _id: req.params.id }, { $set: req.body })
        .lean()
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.putMessage + e });
        });
    res.status(200).json(obj);
});

api.delete(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.params.id)) {
        res.status(400).json(errorIDValidationMessages.deleteMessage);
    }
    let obj: Object = await entityModel
        .findByIdAndRemove(req.params.id)
        .lean()
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.deleteMessage + e });
        });
    res.status(200).json(obj);
});

export const apiEntity = router;
