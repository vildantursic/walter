/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {_objectModel} from "../models/models";

const api = router.route("/api/object/:entity");

api.get((req: Request, res: Response) => {

});

api.post((req: Request, res: Response) => {

});

api.put((req: Request, res: Response) => {

});

api.delete((req: Request, res: Response) => {

});

export const apiObject = router;
