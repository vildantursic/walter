/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {IRoute} from "express-serve-static-core";
import * as jwt from "jsonwebtoken";
import {readFileSync} from "fs";

const api: IRoute = router.route("/refresh");

api.post(async (req: Request, res: Response) => {
    // verify the existing token
    let key: string = readFileSync("./helpers/key.ts").toString();
    let profile: string = jwt.verify(req.body.token, key);

    // check if the user still exists or if authorization hasn't been revoked
    // if (!valid) return res.send(401); // re-logging

    // issue a new token
    let refreshedToken: string = jwt.sign(profile, key, { expiresIn: "10m" });
    res.json({ token: refreshedToken });
});

export const refreshToken = router;
