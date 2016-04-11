/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();
import {objectModel} from "../models/object-model";

const api = router.route("/api/:entity");

api.get((req: Request, res: Response) => {

  let entity: string = req.params.entity;

  // Get object

  res.json("nothing");

});
api.post((req: Request, res: Response) => {

  let entity: string = req.params.entity;

  let reqObject: Object = req.body;
  // Create object

  res.json(reqObject);

});

api.put((req: Request, res: Response) => {

  let entity: string = req.params.entity;

  let reqObject: Object = req.body;
  res.json(reqObject);

});
api.delete((req: Request, res: Response) => {

  let entity: string = req.params.entity;
  res.json({
    entity: entity,
    method: "delete"
  });

});

export const apiRoute = router;
