/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {_complexModel} from "../models/models";

const api = router.route("/api/complex/:entity");

api.get((req: Request, res: Response) => {

});

api.post((req: Request, res: Response) => {

});

api.put((req: Request, res: Response) => {
    
});

api.delete((req: Request, res: Response) => {

});

export const apiRoute = router;
