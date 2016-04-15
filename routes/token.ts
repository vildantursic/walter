/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import {userModel} from "../models/models";
import {checkObjectIDValidity} from "../helpers/validation";
import {errorIDValidationMessages, errorApiMessages} from "../helpers/errorMessages";
import * as jwt from "jsonwebtoken";
import {key} from "../helpers/key";

const api: IRoute = router.route("/token");

api.post(async (req: Request, res: Response) => {

    if (!checkObjectIDValidity(req.body.id)) {
        res.status(400).json(errorIDValidationMessages.getMessage);
    }
    let obj: Object = await userModel
        .find({_id: req.body.id})
        .exec()
        .catch((e: Error) => {
            res.status(400).send({ error: errorApiMessages.getMessage + e });
        });

    if (req.body.username === obj[0].username) {
        let token: string = jwt.sign({ username: req.body.username }, key, { expiresIn: "40m" });
        res.status(200).json({ token: token });
    } else {
        res.status(401).json("Login Failed!");
    }
});

export const token = router;
