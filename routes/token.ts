/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import * as jwt from "jsonwebtoken";

const api: IRoute = router.route("/token");

api.post(async (req: Request, res: Response) => {

    if (req.body.username === "walter") {
        let token: string = await jwt.sign({ username: req.body.username }, "walter-secret", {expiresInMinutes: 60});
        res.status(200).json(token);
    } else {
        res.status(401).json("Login Failed!");
    }
});

export const token = router;
