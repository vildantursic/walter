/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();

// not working with router.route(....)
const api = router.route("/api/:entity");

api.get((req: Request, res: Response) => {

  let entity: string = req.params.entity;

  let heroes = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco 2" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
  ];

  res.json(heroes);

});
api.post((req: Request, res: Response) => {

  let entity: string = req.params.entity;

  let reqObject: Object = req.body;
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
