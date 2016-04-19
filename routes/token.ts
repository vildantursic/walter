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

    let username: string = req.query.username;
    console.log(username);

    let obj: Object = await userModel
        .find({username: username})
        .lean()
        .exec();

    if (username === obj[0].username) {
        let token: string = jwt.sign({ username: username }, key, { expiresIn: "2h" });
        res.status(200).json({ token: token });
    } else {
        res.status(401).json("Login Failed!");
    }
});

export const token = router;
