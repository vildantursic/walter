/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();

// not working with router.route(....)
const api = router.route("/api/:entity");

api.get((req: Request, res: Response) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "get"
  });

});
api.post((req: Request, res: Response) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "post"
  });

});

api.put((req: Request, res: Response) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "put"
  });

});
api.delete((req: Request, res: Response) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "delete"
  });

});

export const apiRoute = router;